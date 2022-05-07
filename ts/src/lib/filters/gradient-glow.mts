import { CaseStyle, IoType } from "kryo";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { IntegerType } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint4 } from "semantic-types";

import { $ColorStop, ColorStop } from "../color-stop.mjs";
import { Sfixed8P8 } from "../fixed-point/sfixed8p8.mjs";
import { Sfixed16P16 } from "../fixed-point/sfixed16p16.mjs";
import { $FilterType, FilterType } from "./_type.mjs";

export interface GradientGlow {
  filter: FilterType.GradientGlow;
  gradient: ColorStop[];
  blurX: Sfixed16P16;
  blurY: Sfixed16P16;
  angle: Sfixed16P16;
  distance: Sfixed16P16;
  strength: Sfixed8P8;
  inner: boolean;
  knockout: boolean;
  compositeSource: boolean;
  onTop: boolean;
  passes: Uint4;
}

export const $GradientGlow: RecordIoType<GradientGlow> = new RecordType<GradientGlow>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.GradientGlow as FilterType.GradientGlow})},
    gradient: {type: new ArrayType({itemType: $ColorStop, maxLength: Infinity})},
    blurX: {type: Sfixed16P16},
    blurY: {type: Sfixed16P16},
    angle: {type: Sfixed16P16},
    distance: {type: Sfixed16P16},
    strength: {type: Sfixed8P8},
    inner: {type: $Boolean},
    knockout: {type: $Boolean},
    compositeSource: {type: $Boolean},
    onTop: {type: $Boolean},
    passes: {type: new IntegerType({min: 0, max: 15}) as IoType<Uint4>},
  },
  changeCase: CaseStyle.SnakeCase,
});
