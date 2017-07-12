import {ArrayType, CaseStyle, DocumentType} from "kryo";
import {MorphColorStop} from "./morph-color-stop";

export interface MorphGradient {
  colorStops: MorphColorStop[];
}

export namespace MorphGradient {
  export interface Json {
    color_stops: MorphColorStop.Json[];
  }

  export const type: DocumentType<MorphGradient> = new DocumentType<MorphGradient>({
    properties: {
      colorStops: {type: new ArrayType({itemType: MorphColorStop.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
