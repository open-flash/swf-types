import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {StraightSRgba} from "../basic-types/straight-s-rgba";

export interface MorphColorStop {
  startRatio: Uint8;
  startColor: StraightSRgba;
  endRatio: Uint8;
  endColor: StraightSRgba;
}

export namespace MorphColorStop {
  export interface Json {
    start_ratio: number;
    start_color: StraightSRgba.Json;
    end_ratio: number;
    end_color: StraightSRgba.Json;
  }

  export const type: DocumentType<MorphColorStop> = new DocumentType<MorphColorStop>({
    properties: {
      startRatio: {type: new Int32Type()},
      startColor: {type: StraightSRgba.type},
      endRatio: {type: new Int32Type()},
      endColor: {type: StraightSRgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
