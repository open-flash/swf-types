import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {ColorStop} from "./color-stop";
import {InterpolationMode} from "./interpolation-mode";
import {SpreadMode} from "./spread-mode";

export interface Gradient {
  spreadMode: SpreadMode;
  interpolationMode: InterpolationMode;
  colorStops: ColorStop[];
}

export namespace Gradient {
  export interface Json {
    "spread-mode": SpreadMode.Json;
    "interpolation-mode": InterpolationMode;
    "color-stops": ColorStop.Json[];
  }

  export const type: DocumentType<Gradient> = new DocumentType<Gradient>({
    properties: {
      spreadMode: {type: SpreadMode.type},
      interpolationMode: {type: InterpolationMode.type},
      colorStops: {type: new ArrayType({itemType: ColorStop.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
