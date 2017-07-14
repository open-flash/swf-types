import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {FillStyleType} from "../shapes/fills/_type";
import {StraightSRgba8} from "../straight-s-rgba8";

export interface SolidMorphFill {
  fillStypeType: FillStyleType.Solid;
  startColor: StraightSRgba8;
  endColor: StraightSRgba8;
}

export namespace SolidMorphFill {
  export interface Json {
    fill_style_type: "solid";
    start_color: StraightSRgba8.Json;
    end_color: StraightSRgba8.Json;
  }

  export const type: DocumentType<SolidMorphFill> = new DocumentType<SolidMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.Solid})},
      startColor: {type: StraightSRgba8.type},
      endColor: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
