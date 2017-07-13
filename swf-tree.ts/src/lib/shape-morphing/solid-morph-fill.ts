import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {StraightSRgba} from "../basic-types/straight-s-rgba";
import {FillStyleType} from "../shapes/fill-style-type";

export interface SolidMorphFill {
  fillStypeType: FillStyleType.Solid;
  startColor: StraightSRgba;
  endColor: StraightSRgba;
}

export namespace SolidMorphFill {
  export interface Json {
    fill_style_type: "solid";
    start_color: StraightSRgba.Json;
    end_color: StraightSRgba.Json;
  }

  export const type: DocumentType<SolidMorphFill> = new DocumentType<SolidMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.Solid})},
      startColor: {type: StraightSRgba.type},
      endColor: {type: StraightSRgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
