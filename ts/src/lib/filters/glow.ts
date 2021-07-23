import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { IntegerType } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint5 } from "semantic-types";

import { Sfixed8P8 } from "../fixed-point/sfixed8p8.js";
import { Sfixed16P16 } from "../fixed-point/sfixed16p16.js";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.js";
import { $FilterType, FilterType } from "./_type.js";

export interface Glow {
  filter: FilterType.Glow;
  color: StraightSRgba8;
  blurX: Sfixed16P16;
  blurY: Sfixed16P16;
  strength: Sfixed8P8;
  inner: boolean;
  knockout: boolean;
  compositeSource: boolean;
  passes: Uint5;
}

export const $Glow: RecordIoType<Glow> = new RecordType<Glow>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.Glow as FilterType.Glow})},
    color: {type: $StraightSRgba8},
    blurX: {type: Sfixed16P16},
    blurY: {type: Sfixed16P16},
    strength: {type: Sfixed8P8},
    inner: {type: $Boolean},
    knockout: {type: $Boolean},
    compositeSource: {type: $Boolean},
    passes: {type: new IntegerType({min: 0, max: 31})},
  },
  changeCase: CaseStyle.SnakeCase,
});
