import React, { useMemo } from 'react';

import { PreComputedChipGeneratorsContext } from '@/object-metadata/contexts/PreComputedChipGeneratorsContext';
import { objectMetadataItemsSelector } from '@/object-metadata/states/objectMetadataItemsSelector';
import { getRecordChipGenerators } from '@/object-record/utils/getRecordChipGenerators';
import { useAtomStateValue } from '@/ui/utilities/state/jotai/hooks/useAtomStateValue';

export const PreComputedChipGeneratorsProvider = ({
  children,
}: React.PropsWithChildren) => {
  const objectMetadataItems = useAtomStateValue(objectMetadataItemsSelector);
  const { chipGeneratorPerObjectPerField, identifierChipGeneratorPerObject } =
    useMemo(
      () => getRecordChipGenerators(objectMetadataItems),
      [objectMetadataItems],
    );

  return (
    <PreComputedChipGeneratorsContext.Provider
      value={{
        chipGeneratorPerObjectPerField,
        identifierChipGeneratorPerObject,
      }}
    >
      {children}
    </PreComputedChipGeneratorsContext.Provider>
  );
};
