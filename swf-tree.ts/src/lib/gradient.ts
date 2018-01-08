import { ArrayType, CaseStyle, DocumentType } from "kryo";
import { ColorSpace } from "./color-space";
import { ColorStop } from "./color-stop";
import { GradientSpread } from "./gradient-spread";

export interface Gradient {
  spread: GradientSpread;
  colorSpace: ColorSpace;
  colors: ColorStop[];
}

export namespace Gradient {
  export interface Json {
    spread: GradientSpread.Json;
    color_space: ColorSpace;
    colors: ColorStop.Json[];
  }

  export const type: DocumentType<Gradient> = new DocumentType<Gradient>({
    properties: {
      spread: {type: GradientSpread.type},
      colorSpace: {type: ColorSpace.type},
      colors: {type: new ArrayType({itemType: ColorStop.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
