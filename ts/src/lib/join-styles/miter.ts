import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Sfixed8P8 } from "../fixed-point/sfixed8p8";
import { $JoinStyleType, JoinStyleType } from "./_type";

export interface Miter {
  type: JoinStyleType.Miter;
  limit: Sfixed8P8;
}

export const $Miter: DocumentIoType<Miter> = new DocumentType<Miter>({
  properties: {
    type: {type: new LiteralType({type: $JoinStyleType, value: JoinStyleType.Miter as JoinStyleType.Miter})},
    limit: {type: Sfixed8P8},
  },
  changeCase: CaseStyle.SnakeCase,
});
