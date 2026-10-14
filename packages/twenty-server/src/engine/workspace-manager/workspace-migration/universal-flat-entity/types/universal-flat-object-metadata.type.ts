import { type ObjectMetadataEntity } from 'src/engine/metadata-modules/object-metadata/object-metadata.entity';
import { type UniversalFlatEntityFrom } from 'src/engine/workspace-manager/workspace-migration/universal-flat-entity/types/universal-flat-entity-from.type';

export type UniversalFlatObjectMetadata = UniversalFlatEntityFrom<
  Omit<
    ObjectMetadataEntity,
    | 'dataSourceId'
    | 'labelIdentifierFieldMetadataId'
    | 'imageIdentifierFieldMetadataId'
  >,
  'objectMetadata'
> & {
  // TODO: Validate these identifiers once the common source is defined.
  labelIdentifierFieldMetadataUniversalIdentifier: string | null;
  imageIdentifierFieldMetadataUniversalIdentifier: string | null;
};
