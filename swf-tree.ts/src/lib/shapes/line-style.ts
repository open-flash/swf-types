import {CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {StraightSRgba} from "../basic-types/straight-s-rgba";

export interface LineStyle {
  width: Uint16;
  color: StraightSRgba;
}

export namespace LineStyle {
  export interface Json {
    width: number;
    color: StraightSRgba.Json;
  }

  export const type: DocumentType<LineStyle> = new DocumentType<LineStyle>({
    properties: {
      width: {type: new Int32Type()},
      color: {type: StraightSRgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
