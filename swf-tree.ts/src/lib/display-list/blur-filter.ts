import {CaseStyle, DocumentType, Float64Type, Int32Type, LiteralType} from "kryo";
import {Uint8} from "semantic-types";
import {Fixed16P16} from "../basic-types/fixed-point/fixed16p16";
import {FilterId} from "./filter-id";

export interface BlurFilter {
  filterId: FilterId.Blur;
  blurX: Fixed16P16;
  blurY: Fixed16P16;
  passes: Uint8;
}

export namespace BlurFilter {
  export interface Json {
    "filter-id": "blur";
    "blur-x": number;
    "blur-y": number;
    "passes": number;
  }

  export const type: DocumentType<BlurFilter> = new DocumentType<BlurFilter>({
    properties: {
      filterId: {type: new LiteralType({type: FilterId.type, value: FilterId.Blur})},
      blurX: {type: new Float64Type()},
      blurY: {type: new Float64Type()},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
