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
    redMult: $ColorTransform.properties.redMult,
    greenMult: $ColorTransform.properties.greenMult,
    blueMult: $ColorTransform.properties.blueMult,
    alphaMult: {type: Sfixed8P8},
    redAdd: $ColorTransform.properties.redAdd,
    greenAdd: $ColorTransform.properties.greenAdd,
    blueAdd: $ColorTransform.properties.blueAdd,
    alphaAdd: {type: $Sint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
