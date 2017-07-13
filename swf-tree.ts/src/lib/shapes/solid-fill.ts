import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {FillStyleType} from "./fill-style-type";

export interface SolidFill {
  fillStyleType: FillStyleType.Solid;
  color: StraightSRgba;
}

export namespace SolidFill {
  export interface Json {
    fill_style_type: "solid";
    color: StraightSRgba.Json;
  }

  export const type: DocumentType<SolidFill> = new DocumentType<SolidFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.Solid})},
      color: {type: StraightSRgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
