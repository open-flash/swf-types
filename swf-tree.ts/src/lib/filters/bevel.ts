import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { IoType } from "kryo/types";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint4 } from "semantic-types";
import { Fixed16P16 } from "../fixed-point/fixed16p16";
import { Fixed8P8 } from "../fixed-point/fixed8p8";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8";
import { $FilterType, FilterType } from "./_type";

export interface Bevel {
  filter: FilterType.Bevel;
  shadowColor: StraightSRgba8;
  highlightColor: StraightSRgba8;
  blurX: Fixed16P16;
  blurY: Fixed16P16;
  angle: Fixed16P16;
  distance: Fixed16P16;
  strength: Fixed8P8;
  inner: boolean;
  knockout: boolean;
  compositeSource: boolean;
  onTop: boolean;
  passes: Uint4;
}

export const $Bevel: DocumentIoType<Bevel> = new DocumentType<Bevel>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.Bevel as FilterType.Bevel})},
    shadowColor: {type: $StraightSRgba8},
    highlightColor: {type: $StraightSRgba8},
    blurX: {type: Fixed16P16},
    blurY: {type: Fixed16P16},
    angle: {type: Fixed16P16},
    distance: {type: Fixed16P16},
    strength: {type: Fixed8P8},
    inner: {type: $Boolean},
    knockout: {type: $Boolean},
    compositeSource: {type: $Boolean},
    onTop: {type: $Boolean},
    passes: {type: new IntegerType({min: 0, max: 15}) as IoType<Uint4>},
  },
  changeCase: CaseStyle.SnakeCase,
});
