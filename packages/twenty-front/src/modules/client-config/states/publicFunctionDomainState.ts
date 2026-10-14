import { createAtomState } from '@/ui/utilities/state/jotai/utils/createAtomState';

export const publicFunctionDomainState = createAtomState<
  string | null | undefined
>({
  key: 'publicFunctionDomain',
  defaultValue: undefined,
});
