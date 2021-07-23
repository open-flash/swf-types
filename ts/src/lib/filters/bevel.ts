import { CaseStyle, IoType } from "kryo";
import { $Boolean } from "kryo/boolean";
import { IntegerType } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint4 } from "semantic-types";

import { Sfixed8P8 } from "../fixed-point/sfixed8p8.js";
import { Sfixed16P16 } from "../fixed-point/sfixed16p16.js";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8.js";
import { $FilterType, FilterType } from "./_type.js";

export interface Bevel {
  filter: FilterType.Bevel;
  shadowColor: StraightSRgba8;
  highlightColor: StraightSRgba8;
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

export const $Bevel: RecordIoType<Bevel> = new RecordType<Bevel>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.Bevel as FilterType.Bevel})},
    shadowColor: {type: $StraightSRgba8},
    highlightColor: {type: $StraightSRgba8},
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
