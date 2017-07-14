import {BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Sfixed16p16, Sfixed8p8, Uint8} from "semantic-types";
import {StraightSRgba8} from "../straight-s-rgba8";
import {FilterType} from "./_type";

export interface DropShadow {
  filter: FilterType.DropShadow;
  dropShadowColor: StraightSRgba8;
  blurX: Sfixed16p16;
  blurY: Sfixed16p16;
  angle: Sfixed16p16;
  distance: Sfixed16p16;
  strength: Sfixed8p8;
  innerShadow: boolean;
  knockout: boolean;
  compositeSource: true;
  passes: Uint8;
}

export namespace DropShadow {
  export interface Json {
    filter: "drop-shadow";
    drop_shadow_color: StraightSRgba8.Json;
    blur_x: number;
    blur_y: number;
    angle: number;
    distance: number;
    strength: number;
    inner_shadow: boolean;
    knockout: boolean;
    composite_source: true;
    passes: number;
  }

  export const type: DocumentType<DropShadow> = new DocumentType<DropShadow>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.DropShadow})},
      dropShadowColor: {type: StraightSRgba8.type},
      blurX: {type: new Float64Type()},
      blurY: {type: new Float64Type()},
      angle: {type: new Float64Type()},
      distance: {type: new Float64Type()},
      strength: {type: new Float64Type()},
      innerShadow: {type: new BooleanType()},
      knockout: {type: new BooleanType()},
      compositeSource: {type: new LiteralType({type: new BooleanType(), value: true})},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
