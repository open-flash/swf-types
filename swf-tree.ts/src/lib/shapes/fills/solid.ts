import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {StraightSRgba8} from "../../straight-s-rgba8";
import {FillStyleType} from "./_type";

export interface Solid {
  type: FillStyleType.Solid;
  color: StraightSRgba8;
}

export namespace Solid {
  export interface Json {
    type: "solid";
    color: StraightSRgba8.Json;
  }

  export const type: DocumentType<Solid> = new DocumentType<Solid>({
    properties: {
      type: {type: new LiteralType({type: FillStyleType.type, value: FillStyleType.Solid})},
      color: {type: StraightSRgba8.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
