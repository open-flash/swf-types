import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {Rgba} from "../basic-types/rgba";

export interface MorphLineStyle {
  startWidth: Uint16;
  endWidth: Uint16;
  startColor: Rgba;
  endColor: Rgba;
}

export namespace MorphLineStyle {
  export interface Json {
    start_width: number;
    end_width: number;
    start_color: Rgba.Json;
    end_color: Rgba.Json;
  }

  export const type: DocumentType<MorphLineStyle> = new DocumentType<MorphLineStyle>({
    properties: {
      startWidth: {type: new Int32Type()},
      endWidth: {type: new Int32Type()},
      startColor: {type: Rgba.type},
      endColor: {type: Rgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
