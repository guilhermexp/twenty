import { createAtomState } from '@/ui/utilities/state/jotai/utils/createAtomState';

export const hasAttemptedPrivateModeAutoLoginState = createAtomState<boolean>({
  key: 'hasAttemptedPrivateModeAutoLoginState',
  defaultValue: false,
});
