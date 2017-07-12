import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {Rgb} from "./rgb";

export interface Rgba extends Rgb {
  a: Uint8;
}

export namespace Rgba {
  export interface Json extends Rgb.Json {
    a: number;
  }

  export const type: DocumentType<Rgba> = new DocumentType<Rgba>({
    properties: {
      ...Rgb.type.properties,
      a: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
