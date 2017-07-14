import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Sint16} from "semantic-types";
import {ColorTransform} from "./color-transform";
import {Fixed8P8} from "./fixed-point/fixed8p8";

export interface ColorTransformWithAlpha extends ColorTransform {
  alphaMult: Fixed8P8;
  alphaAdd: Sint16;
}

export namespace ColorTransformWithAlpha {
  export interface Json extends ColorTransform.Json {
    alpha_mult: number;
    alpha_add: number;
  }

  export const type: DocumentType<ColorTransformWithAlpha> = new DocumentType<ColorTransformWithAlpha>({
    properties: {
      ...ColorTransform.type.properties,
      alphaMult: {type: Fixed8P8.type},
      alphaAdd: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
