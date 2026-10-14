import { isNonEmptyString } from '@sniptt/guards';

import { type FieldMetadataItem } from '@/object-metadata/types/FieldMetadataItem';
import { type ObjectRecord } from '@/object-record/types/ObjectRecord';
import { FieldMetadataType } from 'twenty-shared/types';
import { isDefined } from 'twenty-shared/utils';

export const getImageIdentifierFieldValue = (
  record: ObjectRecord,
  imageIdentifierFieldMetadataItem: FieldMetadataItem | undefined,
): string | null => {
  if (!isDefined(imageIdentifierFieldMetadataItem?.name)) {
    return null;
  }

  const fieldValue = record[imageIdentifierFieldMetadataItem.name];

  if (!isDefined(fieldValue)) {
    return null;
  }

  switch (imageIdentifierFieldMetadataItem.type) {
    case FieldMetadataType.FILES: {
      const url = Array.isArray(fieldValue) ? fieldValue[0]?.url : undefined;

      return isNonEmptyString(url) ? url : null;
    }
    case FieldMetadataType.LINKS:
      return null;
    default:
      return null;
  }
};
