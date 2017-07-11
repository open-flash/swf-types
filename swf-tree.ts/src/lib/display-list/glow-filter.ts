import {BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Fixed16P16} from "../../fixed-point/fixed16p16";
import {Fixed8P8} from "../../fixed-point/fixed8p8";
import {Uint8} from "semantic-types";
import {Rgba} from "../basic-types/rgba";
import {FilterId} from "./filter-id";

export interface GlowFilter {
  filterId: FilterId.Glow;
  glowColor: Rgba;
  blurX: Fixed16P16;
  blurY: Fixed16P16;
  strength: Fixed8P8;
  innerGlow: boolean;
  knockout: boolean;
  compositeSource: boolean;
  passes: Uint8;
}

export namespace GlowFilter {
  export interface Json {
    "filter-id": "bevel";
    "glow-color": Rgba.Json;
    "blur-x": number;
    "blur-y": number;
    "strength": number;
    "inner-glow": boolean;
    "knockout": boolean;
    "composite-source": true;
    "passes": number;
  }

  export const type: DocumentType<GlowFilter> = new DocumentType<GlowFilter>({
    properties: {
      filterId: {type: new LiteralType({type: FilterId.type, value: FilterId.Glow})},
      glowColor: {type: Rgba.type},
      blurX: {type: new Float64Type()},
      blurY: {type: new Float64Type()},
      strength: {type: new Float64Type()},
      innerGlow: {type: new BooleanType()},
      knockout: {type: new BooleanType()},
      compositeSource: {type: new LiteralType({type: new BooleanType(), value: true})},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
