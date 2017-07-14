import {BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Sfixed16p16, Sfixed8p8, Uint8} from "semantic-types";
import {StraightSRgba8} from "../straight-s-rgba8";
import {FilterType} from "./_type";

export interface Bevel {
  filter: FilterType.Bevel;
  shadowColor: StraightSRgba8;
  highlightColor: StraightSRgba8;
  blurX: Sfixed16p16;
  blurY: Sfixed16p16;
  angle: Sfixed16p16;
  distance: Sfixed16p16;
  strength: Sfixed8p8;
  innerShadow: boolean;
  knockout: boolean;
  compositeSource: true;
  onTop: boolean;
  passes: Uint8;
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
    inner_shadow: boolean;
    knockout: boolean;
    composite_source: true;
    on_top: boolean;
    passes: number;
  }

  export const type: DocumentType<Bevel> = new DocumentType<Bevel>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.Bevel})},
      shadowColor: {type: StraightSRgba8.type},
      highlightColor: {type: StraightSRgba8.type},
      blurX: {type: new Float64Type()},
      blurY: {type: new Float64Type()},
      angle: {type: new Float64Type()},
      distance: {type: new Float64Type()},
      strength: {type: new Float64Type()},
      innerShadow: {type: new BooleanType()},
      knockout: {type: new BooleanType()},
      compositeSource: {type: new LiteralType({type: new BooleanType(), value: true})},
      onTop: {type: new BooleanType()},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
