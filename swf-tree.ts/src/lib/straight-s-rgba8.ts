import { CaseStyle, DocumentType, IntegerType } from "kryo";
import {StraightSRgba as _StraightSRgba, Uint8 } from "semantic-types";
import { SRgb8 } from "./s-rgb8";

export interface StraightSRgba8 extends _StraightSRgba<Uint8> {
}

export namespace StraightSRgba8 {
  export interface Json extends SRgb8.Json {
    a: number;
  }

  export const type: DocumentType<StraightSRgba8> = new DocumentType<StraightSRgba8>({
    properties: {
      ...SRgb8.type.properties,
      a: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
