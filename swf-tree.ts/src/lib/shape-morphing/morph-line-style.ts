import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Rgba} from "../basic-types/rgba";
import {Uint16} from "semantic-types";

export interface MorphLineStyle {
  startWidth: Uint16;
  endWidth: Uint16;
  startColor: Rgba;
  endColor: Rgba;
}

export namespace MorphLineStyle {
  export interface Json {
    "start-width": number;
    "end-width": number;
    "start-color": Rgba.Json;
    "end-color": Rgba.Json;
  }

  export const type: DocumentType<MorphLineStyle> = new DocumentType<MorphLineStyle>({
    properties: {
      startWidth: {type: new Int32Type()},
      endWidth: {type: new Int32Type()},
      startColor: {type: Rgba.type},
      endColor: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
