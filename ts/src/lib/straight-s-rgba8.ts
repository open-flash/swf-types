import { $Uint8 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { StraightSRgba as StraightSRgba, Uint8 } from "semantic-types";
import { $SRgb8 } from "./s-rgb8.js";

export interface StraightSRgba8 extends StraightSRgba<Uint8> {
}

export const $StraightSRgba8: RecordIoType<StraightSRgba8> = new RecordType<StraightSRgba8>({
  properties: {
    r: $SRgb8.properties.r,
    g: $SRgb8.properties.g,
    b: $SRgb8.properties.b,
    a: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
