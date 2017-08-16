import {BooleanType, CaseStyle, DocumentType, Float64Type, IntegerType, LiteralType} from "kryo";
import {Uint5} from "semantic-types";
import {Fixed16P16} from "../fixed-point/fixed16p16";
import {Fixed8P8} from "../fixed-point/fixed8p8";
import {StraightSRgba8} from "../straight-s-rgba8";
import {FilterType} from "./_type";

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

export namespace Glow {
  export interface Json {
    filter: "glow";
    color: StraightSRgba8.Json;
    blur_x: number;
    blur_y: number;
    strength: number;
    inner: boolean;
    knockout: boolean;
    composite_source: boolean;
    passes: number;
  }

  export const type: DocumentType<Glow> = new DocumentType<Glow>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.Glow})},
      color: {type: StraightSRgba8.type},
      blurX: {type: new Float64Type()},
      blurY: {type: new Float64Type()},
      strength: {type: new Float64Type()},
      inner: {type: new BooleanType()},
      knockout: {type: new BooleanType()},
      compositeSource: {type: new BooleanType()},
      passes: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
