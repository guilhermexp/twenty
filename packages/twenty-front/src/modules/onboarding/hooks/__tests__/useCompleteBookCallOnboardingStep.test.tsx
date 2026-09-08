import { MockedProvider } from '@apollo/client/testing/react';
import { act, renderHook } from '@testing-library/react';
import { Provider as JotaiProvider } from 'jotai';
import { createElement, type ReactNode } from 'react';

import { currentUserState } from '@/auth/states/currentUserState';
import { currentWorkspaceState } from '@/auth/states/currentWorkspaceState';
import { ONBOARDING_BOOK_CALL_PENDING_USER_VAR_KEY } from '@/onboarding/constants/OnboardingBookCallPendingUserVarKey';
import { useCompleteBookCallOnboardingStep } from '@/onboarding/hooks/useCompleteBookCallOnboardingStep';
import { getIsBookCallOnboardingStepPending } from '@/onboarding/utils/getIsBookCallOnboardingStepPending';
import {
  jotaiStore,
  resetJotaiStore,
} from '@/ui/utilities/state/jotai/jotaiStore';
import { CompleteBookCallOnboardingStepDocument } from '~/generated-metadata/graphql';
import { mockCurrentWorkspace } from '~/testing/mock-data/users';

const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockNavigate,
}));

const mockSetNextOnboardingStatus = jest.fn();

jest.mock('@/onboarding/hooks/useSetNextOnboardingStatus', () => ({
  useSetNextOnboardingStatus: () => mockSetNextOnboardingStatus,
}));

const mutationMock = {
  request: {
    query: CompleteBookCallOnboardingStepDocument,
    variables: { hasBookedCall: false, isAutoSkipped: false },
  },
  maxUsageCount: Number.POSITIVE_INFINITY,
  result: {
    data: {
      completeBookCallOnboardingStep: {
        __typename: 'OnboardingStepSuccess',
        success: true,
      },
    },
  },
};

const mutationMockBooked = {
  request: {
    query: CompleteBookCallOnboardingStepDocument,
    variables: { hasBookedCall: true, isAutoSkipped: false },
  },
  maxUsageCount: Number.POSITIVE_INFINITY,
  result: {
    data: {
      completeBookCallOnboardingStep: {
        __typename: 'OnboardingStepSuccess',
        success: true,
      },
    },
  },
};

const renderCompleteHook = () => {
  jotaiStore.set(currentWorkspaceState.atom, mockCurrentWorkspace);

  const wrapper = ({ children }: { children: ReactNode }) =>
    createElement(
      MockedProvider,
      { mocks: [mutationMock, mutationMockBooked] as never },
      createElement(JotaiProvider, { store: jotaiStore }, children),
    );

  return renderHook(() => useCompleteBookCallOnboardingStep(), { wrapper });
};

describe('useCompleteBookCallOnboardingStep', () => {
  beforeEach(() => {
    resetJotaiStore();
    jest.clearAllMocks();
  });

  it('should advance onboarding status without manual navigation', async () => {
    const { result } = renderCompleteHook();

    await act(async () => {
      await result.current({ hasBookedCall: false });
    });

    expect(mockSetNextOnboardingStatus).toHaveBeenCalledWith({
      stepHistoryEffect: 'recordAsReversible',
    });
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('should clear history when call was booked', async () => {
    const { result } = renderCompleteHook();

    await act(async () => {
      await result.current({ hasBookedCall: true });
    });

    expect(mockSetNextOnboardingStatus).toHaveBeenCalledWith({
      stepHistoryEffect: 'clearAfterIrreversibleStep',
    });
    expect(mockNavigate).not.toHaveBeenCalled();
  });

  it('should clear the pending flag before advancing so the step cannot reopen', async () => {
    jotaiStore.set(currentUserState.atom, {
      id: 'user-id',
      userVars: { [ONBOARDING_BOOK_CALL_PENDING_USER_VAR_KEY]: true },
    } as never);

    const { result } = renderCompleteHook();

    mockSetNextOnboardingStatus.mockImplementation(() => {
      expect(
        getIsBookCallOnboardingStepPending(
          jotaiStore.get(currentUserState.atom),
        ),
      ).toBe(false);
    });

    await act(async () => {
      await result.current({ hasBookedCall: false });
    });

    expect(mockSetNextOnboardingStatus).toHaveBeenCalled();
  });
});
