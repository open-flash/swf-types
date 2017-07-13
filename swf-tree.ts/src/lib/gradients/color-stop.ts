import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint8} from "semantic-types";
import {StraightSRgba} from "../basic-types/straight-s-rgba";

export interface ColorStop {
  color: StraightSRgba;
  ratio: Uint8;
}

export namespace ColorStop {
  export interface Json {
    color: StraightSRgba.Json;
    ratio: number;
  }

  export const type: DocumentType<ColorStop> = new DocumentType<ColorStop>({
    properties: {
      color: {type: StraightSRgba.type},
      ratio: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
