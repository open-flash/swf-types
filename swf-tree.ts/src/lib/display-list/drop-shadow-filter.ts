import {BooleanType, CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Rgba} from "../basic-types/rgba";
import {FilterId} from "./filter-id";
import {Sfixed16p16, Sfixed8p8, Uint8} from "semantic-types";

export interface DropShadowFilter {
  filterId: FilterId.DropShadow;
  dropShadowColor: Rgba;
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

export namespace DropShadowFilter {
  export interface Json {
    "filter-id": "drop-shadow";
    "drop-shadow-color": Rgba.Json;
    "blur-x": number;
    "blur-y": number;
    "angle": number;
    "distance": number;
    "strength": number;
    "inner-shadow": boolean;
    "knockout": boolean;
    "composite-source": true;
    "passes": number;
  }

  export const type: DocumentType<DropShadowFilter> = new DocumentType<DropShadowFilter>({
    properties: {
      filterId: {type: new LiteralType({type: FilterId.type, value: FilterId.DropShadow})},
      dropShadowColor: {type: Rgba.type},
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
    rename: CaseStyle.KebabCase,
  });
}
