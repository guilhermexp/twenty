import { SettingsEmptyPlaceholder } from '@/settings/components/SettingsEmptyPlaceholder';
import { SettingsRolesQueryEffect } from '@/settings/roles/components/SettingsRolesQueryEffect';
import { SettingsRolePermissions } from '@/settings/roles/role-permissions/components/SettingsRolePermissions';
import { t } from '@lingui/core/macro';
import { isDefined } from 'twenty-shared/utils';

type SettingsApplicationPermissionsTabProps = {
  defaultRoleId?: string | null;
};

export const SettingsApplicationPermissionsTab = ({
  defaultRoleId,
}: SettingsApplicationPermissionsTabProps) => {
  if (isDefined(defaultRoleId)) {
    return (
      <>
        <SettingsRolesQueryEffect />
        <SettingsRolePermissions roleId={defaultRoleId} isEditable={false} />
      </>
    );
  }

  return (
    <SettingsEmptyPlaceholder padding="0">
      {t`No permissions configured for this application.`}
    </SettingsEmptyPlaceholder>
  );
};
