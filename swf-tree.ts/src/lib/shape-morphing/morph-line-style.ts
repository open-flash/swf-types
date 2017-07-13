import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {StraightSRgba} from "../basic-types/straight-s-rgba";

export interface MorphLineStyle {
  startWidth: Uint16;
  endWidth: Uint16;
  startColor: StraightSRgba;
  endColor: StraightSRgba;
}

export namespace MorphLineStyle {
  export interface Json {
    start_width: number;
    end_width: number;
    start_color: StraightSRgba.Json;
    end_color: StraightSRgba.Json;
  }

  export const type: DocumentType<MorphLineStyle> = new DocumentType<MorphLineStyle>({
    properties: {
      startWidth: {type: new Int32Type()},
      endWidth: {type: new Int32Type()},
      startColor: {type: StraightSRgba.type},
      endColor: {type: StraightSRgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
