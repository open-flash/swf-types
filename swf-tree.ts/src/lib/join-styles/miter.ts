import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $JoinStyleType, JoinStyleType } from "./_type";

export interface Miter {
  type: JoinStyleType.Miter;
  limit: Uint16;
}

export const $Miter: DocumentIoType<Miter> = new DocumentType<Miter>({
  properties: {
    type: {type: new LiteralType({type: $JoinStyleType, value: JoinStyleType.Miter as JoinStyleType.Miter})},
    limit: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
