import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";

export interface SRgb {
  r: Uint8;
  g: Uint8;
  b: Uint8;
}

export namespace SRgb {
  export interface Json {
    r: number;
    g: number;
    b: number;
  }

  export const type: DocumentType<SRgb> = new DocumentType<SRgb>({
    properties: {
      r: {type: new Int32Type()},
      g: {type: new Int32Type()},
      b: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
