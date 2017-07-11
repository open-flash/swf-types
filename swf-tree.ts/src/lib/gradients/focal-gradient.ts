import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {Rgba} from "../basic-types/rgba";
import {ColorStop} from "./color-stop";
import {InterpolationMode} from "./interpolation-mode";
import {SpreadMode} from "./spread-mode";

export interface FocalGradient {
  spreadMode: SpreadMode;
  interpolationMode: InterpolationMode;
  colorStops: ColorStop[];
  focalPoint: Rgba;
}

export namespace FocalGradient {
  export interface Json {
    "spread-mode": SpreadMode.Json;
    "interpolation-mode": InterpolationMode;
    "color-stops": ColorStop.Json[];
    "focal-point": Rgba.Json;
  }

  export const type: DocumentType<FocalGradient> = new DocumentType<FocalGradient>({
    properties: {
      spreadMode: {type: SpreadMode.type},
      interpolationMode: {type: InterpolationMode.type},
      colorStops: {type: new ArrayType({itemType: ColorStop.type, maxLength: Infinity})},
      focalPoint: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
