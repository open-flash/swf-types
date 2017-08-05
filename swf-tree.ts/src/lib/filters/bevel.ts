import {BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Uint4} from "semantic-types";
import {Fixed16P16} from "../fixed-point/fixed16p16";
import {Fixed8P8} from "../fixed-point/fixed8p8";
import {StraightSRgba8} from "../straight-s-rgba8";
import {FilterType} from "./_type";

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

export namespace Bevel {
  export interface Json {
    filter: "bevel";
    shadow_color: StraightSRgba8.Json;
    highlight_color: StraightSRgba8.Json;
    blur_x: number;
    blur_y: number;
    angle: number;
    distance: number;
    strength: number;
    inner: boolean;
    knockout: boolean;
    composite_source: boolean;
    on_top: boolean;
    passes: number;
  }

  export const type: DocumentType<Bevel> = new DocumentType<Bevel>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.Bevel})},
      shadowColor: {type: StraightSRgba8.type},
      highlightColor: {type: StraightSRgba8.type},
      blurX: {type: Fixed16P16.type},
      blurY: {type: Fixed16P16.type},
      angle: {type: Fixed16P16.type},
      distance: {type: Fixed16P16.type},
      strength: {type: Fixed8P8.type},
      inner: {type: new BooleanType()},
      knockout: {type: new BooleanType()},
      compositeSource: {type: new BooleanType()},
      onTop: {type: new BooleanType()},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
