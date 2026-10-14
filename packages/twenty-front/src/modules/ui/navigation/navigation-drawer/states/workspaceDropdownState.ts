import { createAtomState } from '@/ui/utilities/state/jotai/utils/createAtomState';

export const workspaceDropdownState = createAtomState<
  'default' | 'themes' | 'open-record-in'
>({
  key: 'workspaceDropdownState',
  defaultValue: 'default',
});
