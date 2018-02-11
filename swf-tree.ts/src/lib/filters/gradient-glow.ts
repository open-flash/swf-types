import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { IoType } from "kryo/types";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint4 } from "semantic-types";
import { $ColorStop, ColorStop } from "../color-stop";
import { Fixed16P16 } from "../fixed-point/fixed16p16";
import { Fixed8P8 } from "../fixed-point/fixed8p8";
import { $FilterType, FilterType } from "./_type";

export interface GradientGlow {
  filter: FilterType.GradientGlow;
  gradient: ColorStop[];
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

export const $GradientGlow: DocumentIoType<GradientGlow> = new DocumentType<GradientGlow>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.GradientGlow as FilterType.GradientGlow})},
    gradient: {type: new ArrayType({itemType: $ColorStop, maxLength: Infinity})},
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
