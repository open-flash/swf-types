import { ArrayType, BooleanType, CaseStyle, DocumentType } from "kryo";
import { FontAlignmentZoneData } from "./font-alignment-zone-data";

export interface FontAlignmentZone {
  data: FontAlignmentZoneData[];
  hasX: boolean;
  hasY: boolean;
}

export namespace FontAlignmentZone {
  export interface Json {
    data: FontAlignmentZoneData.Json[];
    has_x: boolean;
    has_y: boolean;
  }

  export const type: DocumentType<FontAlignmentZone> = new DocumentType<FontAlignmentZone>({
    properties: {
      data: {type: new ArrayType({itemType: FontAlignmentZoneData.type, maxLength: Infinity})},
      hasX: {type: new BooleanType()},
      hasY: {type: new BooleanType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
