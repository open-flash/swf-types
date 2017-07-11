import {CaseStyle, DocumentType, Float64Type} from "kryo";
import {ColorTransform} from "./color-transform";
import {Sint16} from "semantic-types";

export interface ColorTransformWithAlpha extends ColorTransform {
  alphaMultTerm?: Sint16;
  alphaAddTerm?: Sint16;
}

export namespace ColorTransformWithAlpha {
  export interface Json extends ColorTransform.Json {
    "alpha-mult-term"?: number;
    "alpha-add-term"?: number;
  }

  export const type: DocumentType<ColorTransformWithAlpha> = new DocumentType<ColorTransformWithAlpha>({
    properties: {
      ...ColorTransform.type.properties,
      alphaMultTerm: {
        type: new Float64Type(),
        optional: true,
      },
      alphaAddTerm: {
        type: new Float64Type(),
        optional: true,
      },
    },
    rename: CaseStyle.KebabCase,
  });
}
