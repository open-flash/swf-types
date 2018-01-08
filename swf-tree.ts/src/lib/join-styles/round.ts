import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { JoinStyleType } from "./_type";

export interface Round {
  type: JoinStyleType.Round;
}

export namespace Round {
  export interface Json {
    type: "round";
  }

  export const type: DocumentType<Round> = new DocumentType<Round>({
    properties: {
      type: {type: new LiteralType({type: JoinStyleType.type, value: JoinStyleType.Round})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
