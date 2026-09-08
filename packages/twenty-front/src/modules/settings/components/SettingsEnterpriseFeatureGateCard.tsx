import { SettingsOptionCardContentButton } from '@/settings/components/SettingsOptions/SettingsOptionCardContentButton';
import { IconLock } from 'twenty-ui/icon';
import { Card } from 'twenty-ui/surfaces';

export const SettingsEnterpriseFeatureGateCard = ({
  title,
  description,
  buttonTitle: _buttonTitle,
}: {
  title: string;
  description: string;
  buttonTitle?: string;
}) => {
  return (
    <Card rounded>
      <SettingsOptionCardContentButton
        Icon={IconLock}
        title={title}
        description={description}
      />
    </Card>
  );
};
