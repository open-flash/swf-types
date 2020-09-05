import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.js";
import { $FillStyleType, FillStyleType } from "./_type.js";

export interface Solid {
  type: FillStyleType.Solid;
  color: StraightSRgba8;
}

export const $Solid: RecordIoType<Solid> = new RecordType<Solid>({
  properties: {
    type: {type: new LiteralType({type: $FillStyleType, value: FillStyleType.Solid as FillStyleType.Solid})},
    color: {type: $StraightSRgba8},
  },
  changeCase: CaseStyle.SnakeCase,
});
