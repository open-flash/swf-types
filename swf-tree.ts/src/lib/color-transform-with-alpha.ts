import { $Sint16 } from "kryo/builtins/sint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Sint16 } from "semantic-types";
import { $ColorTransform, ColorTransform } from "./color-transform";
import { Sfixed8P8 } from "./fixed-point/sfixed8p8";

export interface ColorTransformWithAlpha extends ColorTransform {
  alphaMult: Sfixed8P8;
  alphaAdd: Sint16;
}

// tslint:disable-next-line:max-line-length
export const $ColorTransformWithAlpha: DocumentIoType<ColorTransformWithAlpha> = new DocumentType<ColorTransformWithAlpha>({
  properties: {
    ...$ColorTransform.properties,
    alphaMult: {type: Sfixed8P8},
    alphaAdd: {type: $Sint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
