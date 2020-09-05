import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { $Boolean } from "kryo/lib/boolean.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { $FontAlignmentZoneData, FontAlignmentZoneData } from "./font-alignment-zone-data.js";

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
