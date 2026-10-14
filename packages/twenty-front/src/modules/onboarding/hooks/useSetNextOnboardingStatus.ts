import { isDefined } from 'twenty-shared/utils';

import {
  type CurrentUser,
  currentUserState,
} from '@/auth/states/currentUserState';
import {
  type CurrentWorkspace,
  currentWorkspaceState,
} from '@/auth/states/currentWorkspaceState';
import { isOnboardingAiChatEnabledState } from '@/client-config/states/isOnboardingAiChatEnabledState';
import { isWelcomeAnimationVisibleState } from '@/onboarding/states/isWelcomeAnimationVisibleState';
import { onboardingNavigationDirectionState } from '@/onboarding/states/onboardingNavigationDirectionState';
import { shouldOpenAiChatAfterOnboardingState } from '@/onboarding/states/shouldOpenAiChatAfterOnboardingState';
import { getHasJustCompletedOnboarding } from '@/onboarding/utils/getHasJustCompletedOnboarding';
import { getNextPreviousOnboardingStatus } from '@/onboarding/utils/getNextPreviousOnboardingStatus';
import { type OnboardingStepHistoryEffect } from '@/onboarding/types/OnboardingStepHistoryEffect';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';

import { useStore } from 'jotai';
import { useCallback } from 'react';
import { OnboardingStatus } from '~/generated-metadata/graphql';

type GetNextOnboardingStatusArgs = {
  currentUser: CurrentUser | null;
  currentWorkspace: CurrentWorkspace | null;
};

const getNextOnboardingStatus = ({
  currentUser,
  currentWorkspace,
}: GetNextOnboardingStatusArgs) => {
  if (currentUser?.onboardingStatus === OnboardingStatus.WORKSPACE_ACTIVATION) {
    return OnboardingStatus.SYNC_EMAIL;
  }

  if (currentUser?.onboardingStatus === OnboardingStatus.SYNC_EMAIL) {
    return OnboardingStatus.PROFILE_CREATION;
  }

  if (currentUser?.onboardingStatus === OnboardingStatus.PROFILE_CREATION) {
    if (currentWorkspace?.workspaceMembersCount === 1) {
      return OnboardingStatus.INVITE_TEAM;
    }
    return OnboardingStatus.COMPLETED;
  }
  return OnboardingStatus.COMPLETED;
};

export const useSetNextOnboardingStatus = () => {
  const store = useStore();
  const currentUser = useAtomStateValue(currentUserState);
  const currentWorkspace = useAtomStateValue(currentWorkspaceState);
  const isOnboardingAiChatEnabled = useAtomStateValue(
    isOnboardingAiChatEnabledState,
  );

  return useCallback(
    ({
      stepHistoryEffect,
    }: {
      stepHistoryEffect: OnboardingStepHistoryEffect;
    }) => {
      const nextOnboardingStatus = getNextOnboardingStatus({
        currentUser,
        currentWorkspace,
      });

      store.set(onboardingNavigationDirectionState.atom, 'forward');
      store.set(currentUserState.atom, (current) => {
        if (isDefined(current)) {
          return {
            ...current,
            onboardingStatus: nextOnboardingStatus,
            previousOnboardingStatus: getNextPreviousOnboardingStatus({
              stepHistoryEffect,
              currentOnboardingStatus: current.onboardingStatus,
              currentPreviousOnboardingStatus: current.previousOnboardingStatus,
            }),
          };
        }
        return current;
      });

      if (
        getHasJustCompletedOnboarding({
          previousOnboardingStatus: currentUser?.onboardingStatus,
          nextOnboardingStatus,
        })
      ) {
        store.set(isWelcomeAnimationVisibleState.atom, true);
        store.set(
          shouldOpenAiChatAfterOnboardingState.atom,
          isOnboardingAiChatEnabled && currentUser?.isWorkspaceCreator === true,
        );
      }
    },
    [currentUser, currentWorkspace, isOnboardingAiChatEnabled, store],
  );
};
