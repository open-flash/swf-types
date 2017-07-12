import {ArrayType, BooleanType, CaseStyle, DocumentType} from "kryo";
import {AlignmentZoneData} from "./alignment-zone-data";

export interface AlignmentZoneRecord {
  zoneData: AlignmentZoneData[];
  isZoneMaskX: boolean;
  isZoneMaskY: boolean;
}

export namespace AlignmentZoneRecord {
  export interface Json {
    zone_data: AlignmentZoneData.Json[];
    is_zone_mask_x: boolean;
    is_zone_mask_y: boolean;
  }

  export const type: DocumentType<AlignmentZoneRecord> = new DocumentType<AlignmentZoneRecord>({
    properties: {
      zoneData: {type: new ArrayType({itemType: AlignmentZoneData.type, maxLength: Infinity})},
      isZoneMaskX: {type: new BooleanType()},
      isZoneMaskY: {type: new BooleanType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
