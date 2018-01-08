import { CaseStyle, DocumentType, IntegerType } from "kryo";
import {SRgb as _SRgb, Uint8 } from "semantic-types";

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
      r: {type: new IntegerType()},
      g: {type: new IntegerType()},
      b: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
