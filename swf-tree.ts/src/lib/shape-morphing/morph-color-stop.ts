import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {Rgba} from "../basic-types/rgba";

export interface MorphColorStop {
  startRatio: Uint8;
  startColor: Rgba;
  endRatio: Uint8;
  endColor: Rgba;
}

export namespace MorphColorStop {
  export interface Json {
    "start-ratio": number;
    "start-color": Rgba.Json;
    "end-ratio": number;
    "end-color": Rgba.Json;
  }

  export const type: DocumentType<MorphColorStop> = new DocumentType<MorphColorStop>({
    properties: {
      startRatio: {type: new Int32Type()},
      startColor: {type: Rgba.type},
      endRatio: {type: new Int32Type()},
      endColor: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
