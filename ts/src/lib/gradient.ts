import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $ColorSpace, ColorSpace } from "./color-space";
import { $ColorStop, ColorStop } from "./color-stop";
import { $GradientSpread, GradientSpread } from "./gradient-spread";

export interface Gradient {
  spread: GradientSpread;
  colorSpace: ColorSpace;
  colors: ColorStop[];
}

export const $Gradient: DocumentIoType<Gradient> = new DocumentType<Gradient>({
  properties: {
    spread: {type: $GradientSpread},
    colorSpace: {type: $ColorSpace},
    colors: {type: new ArrayType({itemType: $ColorStop, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
