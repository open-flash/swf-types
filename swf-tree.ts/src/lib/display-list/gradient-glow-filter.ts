import {ArrayType, BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Sfixed16p16, Sfixed8p8, Uint8} from "semantic-types";
import {ColorStop} from "../gradients/color-stop";
import {FilterId} from "./filter-id";

export interface GradientGlowFilter {
  filterId: FilterId.GradientGlow;
  gradient: ColorStop[];
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
  // TODO (some weird spec)
}

export namespace GradientGlowFilter {
  export interface Json {
    filter_id: "gradient-glow";
    gradient: ColorStop.Json[];
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

  export const type: DocumentType<GradientGlowFilter> = new DocumentType<GradientGlowFilter>({
    properties: {
      filterId: {type: new LiteralType({type: FilterId.type, value: FilterId.GradientGlow})},
      gradient: {type: new ArrayType({itemType: ColorStop.type, maxLength: Infinity})},
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
