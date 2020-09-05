import { CaseStyle, IoType } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { $Boolean } from "kryo/lib/boolean.js";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint4 } from "semantic-types";

import { $ColorStop, ColorStop } from "../color-stop.js";
import { Sfixed8P8 } from "../fixed-point/sfixed8p8.js";
import { Sfixed16P16 } from "../fixed-point/sfixed16p16.js";
import { $FilterType, FilterType } from "./_type.js";

export interface GradientBevel {
  filter: FilterType.GradientBevel;
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

export const $GradientBevel: RecordIoType<GradientBevel> = new RecordType<GradientBevel>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.GradientBevel as FilterType.GradientBevel})},
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
