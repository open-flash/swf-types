import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {StraightSRgba8} from "../straight-s-rgba8";
import {ColorStop} from "./color-stop";
import {InterpolationMode} from "./interpolation-mode";
import {SpreadMode} from "./spread-mode";

export interface FocalGradient {
  spreadMode: SpreadMode;
  interpolationMode: InterpolationMode;
  colorStops: ColorStop[];
  focalPoint: StraightSRgba8;
}

export namespace FocalGradient {
  export interface Json {
    spread_mode: SpreadMode.Json;
    interpolation_mode: InterpolationMode;
    color_stops: ColorStop.Json[];
    focal_point: StraightSRgba8.Json;
  }

  export const type: DocumentType<FocalGradient> = new DocumentType<FocalGradient>({
    properties: {
      spreadMode: {type: SpreadMode.type},
      interpolationMode: {type: InterpolationMode.type},
      colorStops: {type: new ArrayType({itemType: ColorStop.type, maxLength: Infinity})},
      focalPoint: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
