import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $FontAlignmentZoneData, FontAlignmentZoneData } from "./font-alignment-zone-data";

export interface FontAlignmentZone {
  data: FontAlignmentZoneData[];
  hasX: boolean;
  hasY: boolean;
}

export const $FontAlignmentZone: DocumentIoType<FontAlignmentZone> = new DocumentType<FontAlignmentZone>({
  properties: {
    data: {type: new ArrayType({itemType: $FontAlignmentZoneData, maxLength: Infinity})},
    hasX: {type: $Boolean},
    hasY: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
