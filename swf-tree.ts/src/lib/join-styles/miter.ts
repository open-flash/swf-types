import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Fixed8P8 } from "..";
import { $JoinStyleType, JoinStyleType } from "./_type";

export interface Miter {
  type: JoinStyleType.Miter;
  limit: Fixed8P8;
}

export const $Miter: DocumentIoType<Miter> = new DocumentType<Miter>({
  properties: {
    type: {type: new LiteralType({type: $JoinStyleType, value: JoinStyleType.Miter as JoinStyleType.Miter})},
    limit: {type: Fixed8P8},
  },
  changeCase: CaseStyle.SnakeCase,
});
