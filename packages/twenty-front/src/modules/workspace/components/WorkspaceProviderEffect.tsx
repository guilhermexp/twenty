import { useGetPublicWorkspaceDataByDomain } from '@/domain-manager/hooks/useGetPublicWorkspaceDataByDomain';

export const WorkspaceProviderEffect = () => {
  useGetPublicWorkspaceDataByDomain();

  return <></>;
};
