import {ArrayType, BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Uint4} from "semantic-types";
import {ColorStop} from "../color-stop";
import {Fixed16P16} from "../fixed-point/fixed16p16";
import {Fixed8P8} from "../fixed-point/fixed8p8";
import {FilterType} from "./_type";

export interface GradientBevel {
  filter: FilterType.GradientBevel;
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

export namespace GradientBevel {
  export interface Json {
    filter: "gradient-bevel";
    gradient: ColorStop.Json[];
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

  export const type: DocumentType<GradientBevel> = new DocumentType<GradientBevel>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.GradientBevel})},
      gradient: {type: new ArrayType({itemType: ColorStop.type, maxLength: Infinity})},
      blurX: {type: Fixed16P16.type},
      blurY: {type: Fixed16P16.type},
      angle: {type: Fixed16P16.type},
      distance: {type: Fixed16P16.type},
      strength: {type: Fixed8P8.type},
      inner: {type: new BooleanType()},
      knockout: {type: new BooleanType()},
      compositeSource: {type: new BooleanType()},
      onTop: {type: new BooleanType()},
      passes: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
