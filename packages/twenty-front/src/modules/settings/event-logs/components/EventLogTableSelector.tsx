import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';
import { useLingui } from '@lingui/react/macro';

import { Select } from '@/ui/input/components/Select';
import { EventLogTable } from '~/generated-metadata/graphql';

type EventLogTableSelectorProps = {
  value: EventLogTable;
  onChange: (value: EventLogTable) => void;
};

// Partial: the generated schema enum is regenerated from the server, so it can
// still carry a table the server no longer serves.
const TABLE_LABELS: Partial<Record<EventLogTable, MessageDescriptor>> = {
  [EventLogTable.WORKSPACE_EVENT]: msg`Workspace Events`,
  [EventLogTable.OBJECT_EVENT]: msg`Object Events`,
  [EventLogTable.USAGE_EVENT]: msg`Usage Events`,
  [EventLogTable.APPLICATION_LOG]: msg`Application Logs`,
};

export const EventLogTableSelector = ({
  value,
  onChange,
}: EventLogTableSelectorProps) => {
  const { t } = useLingui();

  const options = (
    Object.entries(TABLE_LABELS) as [EventLogTable, MessageDescriptor][]
  ).map(([table, label]) => ({
    value: table,
    label: t(label),
  }));

  return (
    <Select
      dropdownId="event-log-table-selector"
      label={t`Table`}
      fullWidth
      value={value}
      options={options}
      onChange={onChange}
    />
  );
};
