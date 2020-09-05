import { $Sint16 } from "kryo/lib/integer.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Sint16, Uint16 } from "semantic-types";
import { $Rect, Rect } from "../rect.js";
import { $KerningRecord, KerningRecord } from "./kerning-record.js";

export interface FontLayout {
  ascent: Uint16;
  descent: Uint16;
  leading: Sint16;
  advances: Sint16[];
  bounds: Rect[];
  kerning: KerningRecord[];
}

export const $FontLayout: RecordIoType<FontLayout> = new RecordType<FontLayout>({
  properties: {
    ascent: {type: $Uint16},
    descent: {type: $Uint16},
    leading: {type: $Sint16},
    advances: {type: new ArrayType({itemType: $Sint16, maxLength: Infinity})},
    bounds: {type: new ArrayType({itemType: $Rect, maxLength: Infinity})},
    kerning: {type: new ArrayType({itemType: $KerningRecord, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
