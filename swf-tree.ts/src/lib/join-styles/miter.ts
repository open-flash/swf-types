import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {JoinStyleType} from "./_type";

export interface Miter {
  type: JoinStyleType.Miter;
  limit: Uint16;
}

export namespace Miter {
  export interface Json {
    type: "miter";
    limit: number;
  }

  export const type: DocumentType<Miter> = new DocumentType<Miter>({
    properties: {
      type: {type: new LiteralType({type: JoinStyleType.type, value: JoinStyleType.Miter})},
      limit: {type: new Int32Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
