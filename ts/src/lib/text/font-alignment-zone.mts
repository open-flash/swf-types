import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { RecordIoType, RecordType } from "kryo/record";

import { $FontAlignmentZoneData, FontAlignmentZoneData } from "./font-alignment-zone-data.mjs";

export interface FontAlignmentZone {
  data: FontAlignmentZoneData[];
  hasX: boolean;
  hasY: boolean;
}

export const $FontAlignmentZone: RecordIoType<FontAlignmentZone> = new RecordType<FontAlignmentZone>({
  properties: {
    data: {type: new ArrayType({itemType: $FontAlignmentZoneData, maxLength: Infinity})},
    hasX: {type: $Boolean},
    hasY: {type: $Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
