import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $ColorSpace, ColorSpace } from "./color-space";
import { $GradientSpread, GradientSpread } from "./gradient-spread";
import { $MorphColorStop, MorphColorStop } from "./morph-color-stop";

export interface MorphGradient {
  spread: GradientSpread;
  colorSpace: ColorSpace;
  colors: MorphColorStop[];
}

export const $MorphGradient: DocumentIoType<MorphGradient> = new DocumentType<MorphGradient>({
  properties: {
    spread: {type: $GradientSpread},
    colorSpace: {type: $ColorSpace},
    colors: {type: new ArrayType({itemType: $MorphColorStop, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
