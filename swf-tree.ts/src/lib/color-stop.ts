import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {StraightSRgba8} from "./straight-s-rgba8";

export interface ColorStop {
  ratio: Uint8;
  color: StraightSRgba8;
}

export namespace ColorStop {
  export interface Json {
    ratio: number;
    color: StraightSRgba8.Json;
  }

  export const type: DocumentType<ColorStop> = new DocumentType<ColorStop>({
    properties: {
      ratio: {type: new Int32Type()},
      color: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
