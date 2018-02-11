import { $Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint5 } from "semantic-types";
import { Fixed16P16 } from "../fixed-point/fixed16p16";
import { Fixed8P8 } from "../fixed-point/fixed8p8";
import { $StraightSRgba8, StraightSRgba8 } from "../straight-s-rgba8";
import { $FilterType, FilterType } from "./_type";

export interface Glow {
  filter: FilterType.Glow;
  color: StraightSRgba8;
  blurX: Fixed16P16;
  blurY: Fixed16P16;
  strength: Fixed8P8;
  inner: boolean;
  knockout: boolean;
  compositeSource: boolean;
  passes: Uint5;
}

export const $Glow: DocumentIoType<Glow> = new DocumentType<Glow>({
  properties: {
    filter: {type: new LiteralType({type: $FilterType, value: FilterType.Glow as FilterType.Glow})},
    color: {type: $StraightSRgba8},
    blurX: {type: Fixed16P16},
    blurY: {type: Fixed16P16},
    strength: {type: Fixed8P8},
    inner: {type: $Boolean},
    knockout: {type: $Boolean},
    compositeSource: {type: $Boolean},
    passes: {type: new IntegerType({min: 0, max: 31})},
  },
  changeCase: CaseStyle.SnakeCase,
});
