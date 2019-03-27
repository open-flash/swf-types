import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $JoinStyleType, JoinStyleType } from "./_type";

export interface Round {
  type: JoinStyleType.Round;
}

export const $Round: DocumentIoType<Round> = new DocumentType<Round>({
  properties: {
    type: {type: new LiteralType({type: $JoinStyleType, value: JoinStyleType.Round as JoinStyleType.Round})},
  },
  changeCase: CaseStyle.SnakeCase,
});
