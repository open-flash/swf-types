import { $Boolean } from "kryo/lib/boolean.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { IntegerType } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint5 } from "semantic-types";
import { Sfixed16P16 } from "../fixed-point/sfixed16p16.js";
import { Sfixed8P8 } from "../fixed-point/sfixed8p8.js";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.js";
import { $FilterType, FilterType } from "./_type.js";

export interface DropShadow {
  filter: FilterType.DropShadow;
  color: StraightSRgba8;
  blurX: Sfixed16P16;
  blurY: Sfixed16P16;
  angle: Sfixed16P16;
  distance: Sfixed16P16;
  strength: Sfixed8P8;
  inner: boolean;
  knockout: boolean;
  compositeSource: boolean;
  passes: Uint5;
}

export const $DropShadow: RecordIoType<DropShadow> = new RecordType<DropShadow>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.DropShadow as FilterType.DropShadow})},
    color: {type: $StraightSRgba8},
    blurX: {type: Sfixed16P16},
    blurY: {type: Sfixed16P16},
    angle: {type: Sfixed16P16},
    distance: {type: Sfixed16P16},
    strength: {type: Sfixed8P8},
    inner: {type: $Boolean},
    knockout: {type: $Boolean},
    compositeSource: {type: $Boolean},
    passes: {type: new IntegerType({min: 0, max: 31})},
  },
  changeCase: CaseStyle.SnakeCase,
});
