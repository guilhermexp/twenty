import { type FlatEntityFrom } from 'src/engine/metadata-modules/flat-entity/types/flat-entity-from.type';
import { type ObjectMetadataEntity } from 'src/engine/metadata-modules/object-metadata/object-metadata.entity';

type BaseFlatObjectMetadata = FlatEntityFrom<
  Omit<ObjectMetadataEntity, 'dataSourceId'>
>;
export type FlatObjectMetadata = BaseFlatObjectMetadata & {
  // NOTE: These fields are not reflected on the final UniversalFlatEntity; define a common source when the shape is consolidated.
  labelIdentifierFieldMetadataUniversalIdentifier: string | null;
  imageIdentifierFieldMetadataUniversalIdentifier: string | null;
};
