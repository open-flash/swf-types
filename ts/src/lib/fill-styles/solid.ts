import { CaseStyle } from "kryo";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

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
