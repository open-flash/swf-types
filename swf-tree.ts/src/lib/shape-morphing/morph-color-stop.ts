import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {StraightSRgba8} from "../straight-s-rgba8";

export interface MorphColorStop {
  startRatio: Uint8;
  startColor: StraightSRgba8;
  endRatio: Uint8;
  endColor: StraightSRgba8;
}

export namespace MorphColorStop {
  export interface Json {
    start_ratio: number;
    start_color: StraightSRgba8.Json;
    end_ratio: number;
    end_color: StraightSRgba8.Json;
  }

  export const type: DocumentType<MorphColorStop> = new DocumentType<MorphColorStop>({
    properties: {
      startRatio: {type: new Int32Type()},
      startColor: {type: StraightSRgba8.type},
      endRatio: {type: new Int32Type()},
      endColor: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
