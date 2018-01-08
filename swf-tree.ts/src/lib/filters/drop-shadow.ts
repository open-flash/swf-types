import { BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint5 } from "semantic-types";
import { Fixed16P16 } from "../fixed-point/fixed16p16";
import { Fixed8P8 } from "../fixed-point/fixed8p8";
import { StraightSRgba8 } from "../straight-s-rgba8";
import { FilterType } from "./_type";

export interface DropShadow {
  filter: FilterType.DropShadow;
  color: StraightSRgba8;
  blurX: Fixed16P16;
  blurY: Fixed16P16;
  angle: Fixed16P16;
  distance: Fixed16P16;
  strength: Fixed8P8;
  inner: boolean;
  knockout: boolean;
  compositeSource: boolean;
  passes: Uint5;
}

export namespace DropShadow {
  export interface Json {
    filter: "drop-shadow";
    color: StraightSRgba8.Json;
    blur_x: number;
    blur_y: number;
    angle: number;
    distance: number;
    strength: number;
    inner: boolean;
    knockout: boolean;
    composite_source: boolean;
    passes: number;
  }

  export const type: DocumentType<DropShadow> = new DocumentType<DropShadow>({
    properties: {
      filter: {type: new LiteralType({type: FilterType.type, value: FilterType.DropShadow})},
      color: {type: StraightSRgba8.type},
      blurX: {type: Fixed16P16.type},
      blurY: {type: Fixed16P16.type},
      angle: {type: Fixed16P16.type},
      distance: {type: Fixed16P16.type},
      strength: {type: Fixed8P8.type},
      inner: {type: new BooleanType()},
      knockout: {type: new BooleanType()},
      compositeSource: {type: new BooleanType()},
      passes: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
