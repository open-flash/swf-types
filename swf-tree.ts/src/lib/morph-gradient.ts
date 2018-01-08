import { ArrayType, CaseStyle, DocumentType } from "kryo";
import { ColorSpace } from "./color-space";
import { GradientSpread } from "./gradient-spread";
import { MorphColorStop } from "./morph-color-stop";

export interface MorphGradient {
  spread: GradientSpread;
  colorSpace: ColorSpace;
  colors: MorphColorStop[];
}

export namespace MorphGradient {
  export interface Json {
    spread: GradientSpread.Json;
    color_space: ColorSpace;
    colors: MorphColorStop.Json[];
  }

  export const type: DocumentType<MorphGradient> = new DocumentType<MorphGradient>({
    properties: {
      spread: {type: GradientSpread.type},
      colorSpace: {type: ColorSpace.type},
      colors: {type: new ArrayType({itemType: MorphColorStop.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
