import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {StraightSRgba8} from "../straight-s-rgba8";
import {MorphFillStyleType} from "./_type";

export interface Solid {
  type: MorphFillStyleType.Solid;
  startColor: StraightSRgba8;
  endColor: StraightSRgba8;
}

export namespace Solid {
  export interface Json {
    type: "solid";
    start_color: StraightSRgba8.Json;
    end_color: StraightSRgba8.Json;
  }

  export const type: DocumentType<Solid> = new DocumentType<Solid>({
    properties: {
      type: {type: new LiteralType({type: MorphFillStyleType.type, value: MorphFillStyleType.Solid})},
      startColor: {type: StraightSRgba8.type},
      endColor: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
