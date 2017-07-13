import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {SRgb} from "./s-rgb";

export interface StraightSRgba extends SRgb {
  a: Uint8;
}

export namespace StraightSRgba {
  export interface Json extends SRgb.Json {
    a: number;
  }

  export const type: DocumentType<StraightSRgba> = new DocumentType<StraightSRgba>({
    properties: {
      ...SRgb.type.properties,
      a: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
