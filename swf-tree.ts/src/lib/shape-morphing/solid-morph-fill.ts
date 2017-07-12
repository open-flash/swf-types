import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {Rgba} from "../basic-types/rgba";
import {FillStyleType} from "../shapes/fill-style-type";

export interface SolidMorphFill {
  fillStypeType: FillStyleType.Solid;
  startColor: Rgba;
  endColor: Rgba;
}

export namespace SolidMorphFill {
  export interface Json {
    fill_style_type: "solid";
    start_color: Rgba.Json;
    end_color: Rgba.Json;
  }

  export const type: DocumentType<SolidMorphFill> = new DocumentType<SolidMorphFill>({
    properties: {
      fillStyleType: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.Solid})},
      startColor: {type: Rgba.type},
      endColor: {type: Rgba.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
