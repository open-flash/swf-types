import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {Rgba} from "../basic-types/rgba";

export interface LineStyle {
  width: Uint16;
  color: Rgba;
}

export namespace LineStyle {
  export interface Json {
    width: number;
    color: Rgba.Json;
  }

  export const type: DocumentType<LineStyle> = new DocumentType<LineStyle>({
    properties: {
      width: {type: new Int32Type()},
      color: {type: Rgba.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
