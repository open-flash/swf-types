import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {SRgb as _SRgb, Uint8} from "semantic-types";

export interface SRgb8 extends _SRgb<Uint8> {
}

export namespace SRgb8 {
  export interface Json {
    r: number;
    g: number;
    b: number;
  }

  export const type: DocumentType<SRgb8> = new DocumentType<SRgb8>({
    properties: {
      r: {type: new Int32Type()},
      g: {type: new Int32Type()},
      b: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
