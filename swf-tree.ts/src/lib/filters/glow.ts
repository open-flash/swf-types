import {BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Uint8} from "semantic-types";
import {Fixed16P16} from "../fixed-point/fixed16p16";
import {Fixed8P8} from "../fixed-point/fixed8p8";
import {StraightSRgba8} from "../straight-s-rgba8";
import {FilterType} from "./_type";

export interface Glow {
  filter: FilterType.Glow;
  glowColor: StraightSRgba8;
  blurX: Fixed16P16;
  blurY: Fixed16P16;
  strength: Fixed8P8;
  innerGlow: boolean;
  knockout: boolean;
  compositeSource: boolean;
  passes: Uint8;
}

export namespace Glow {
  export interface Json {
    filter: "bevel";
    glow_color: StraightSRgba8.Json;
    blur_x: number;
    blur_y: number;
    strength: number;
    inner_glow: boolean;
    knockout: boolean;
    composite_source: true;
    passes: number;
  }

  export const type: DocumentType<Glow> = new DocumentType<Glow>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.Glow})},
      glowColor: {type: StraightSRgba8.type},
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
