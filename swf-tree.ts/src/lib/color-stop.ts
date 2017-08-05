import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {StraightSRgba8} from "./straight-s-rgba8";

export interface ColorStop {
  color: StraightSRgba8;
  ratio: Uint8;
}

export namespace ColorStop {
  export interface Json {
    color: StraightSRgba8.Json;
    ratio: number;
  }

  export const type: DocumentType<ColorStop> = new DocumentType<ColorStop>({
    properties: {
      color: {type: StraightSRgba8.type},
      ratio: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
