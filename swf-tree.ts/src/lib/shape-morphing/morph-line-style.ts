import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {StraightSRgba8} from "../straight-s-rgba8";

export interface MorphLineStyle {
  startWidth: Uint16;
  endWidth: Uint16;
  startColor: StraightSRgba8;
  endColor: StraightSRgba8;
}

export namespace MorphLineStyle {
  export interface Json {
    start_width: number;
    end_width: number;
    start_color: StraightSRgba8.Json;
    end_color: StraightSRgba8.Json;
  }

  export const type: DocumentType<MorphLineStyle> = new DocumentType<MorphLineStyle>({
    properties: {
      startWidth: {type: new Int32Type()},
      endWidth: {type: new Int32Type()},
      startColor: {type: StraightSRgba8.type},
      endColor: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
