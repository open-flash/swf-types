import {CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {JoinStyleType} from "./_type";

export interface Bevel {
  type: JoinStyleType.Bevel;
}

export namespace Bevel {
  export interface Json {
    type: "bevel";
  }

  export const type: DocumentType<Bevel> = new DocumentType<Bevel>({
    properties: {
      type: {type: new LiteralType({type: JoinStyleType.type, value: JoinStyleType.Bevel})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
