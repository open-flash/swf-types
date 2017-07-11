import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {Rgba} from "../basic-types/rgba";

export interface ColorStop {
  color: Rgba;
  ratio: Uint8;
}

export namespace ColorStop {
  export interface Json {
    "color": Rgba.Json;
    "ratio": number;
  }

  export const type: DocumentType<ColorStop> = new DocumentType<ColorStop>({
    properties: {
      color: {type: Rgba.type},
      ratio: {type: new Int32Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
