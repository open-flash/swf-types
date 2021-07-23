import { CaseStyle } from "kryo";
import { $Uint8 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { SRgb, Uint8 } from "semantic-types";

export interface SRgb8 extends SRgb<Uint8> {
}

export const $SRgb8: RecordIoType<SRgb8> = new RecordType<SRgb8>({
  properties: {
    r: {type: $Uint8},
    g: {type: $Uint8},
    b: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
