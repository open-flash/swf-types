import {BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Uint8} from "semantic-types";
import {Fixed16P16} from "../basic-types/fixed-point/fixed16p16";
import {Fixed8P8} from "../basic-types/fixed-point/fixed8p8";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {FilterId} from "./filter-id";

export interface GlowFilter {
  filterId: FilterId.Glow;
  glowColor: StraightSRgba;
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
    filter_id: "bevel";
    glow_color: StraightSRgba.Json;
    blur_x: number;
    blur_y: number;
    strength: number;
    inner_glow: boolean;
    knockout: boolean;
    composite_source: true;
    passes: number;
  }

  export const type: DocumentType<GlowFilter> = new DocumentType<GlowFilter>({
    properties: {
      filterId: {type: new LiteralType({type: FilterId.type, value: FilterId.Glow})},
      glowColor: {type: StraightSRgba.type},
      blurX: {type: new Float64Type()},
      blurY: {type: new Float64Type()},
      strength: {type: new Float64Type()},
      innerGlow: {type: new BooleanType()},
      knockout: {type: new BooleanType()},
      compositeSource: {type: new LiteralType({type: new BooleanType(), value: true})},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
