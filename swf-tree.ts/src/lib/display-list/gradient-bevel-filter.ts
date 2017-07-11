import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint8} from "semantic-types";
import {FilterId} from "./filter-id";

// TODO: Does not seem complete
export interface GradientBevelFilter {
  filterId: FilterId.GradientBevel;
  compositeSource: true;
  onTop: true;
  passes: Uint8;
}

export namespace GradientBevelFilter {
  export interface Json {
    "filter-id": "gradient-bevel";
    "composite-source": true;
    "on-top": boolean;
    "passes": number;
  }

  export const type: DocumentType<GradientBevelFilter> = new DocumentType<GradientBevelFilter>({
    properties: {
      filterId: {type: new LiteralType({type: FilterId.type, value: FilterId.GradientBevel})},
      compositeSource: {type: new LiteralType({type: new BooleanType(), value: true})},
      onTop: {type: new BooleanType()},
      passes: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
