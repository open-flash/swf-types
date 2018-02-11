import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $JoinStyleType, JoinStyleType } from "./_type";

export interface Bevel {
  type: JoinStyleType.Bevel;
}

export const $Bevel: DocumentIoType<Bevel> = new DocumentType<Bevel>({
  properties: {
    type: {type: new LiteralType({type: $JoinStyleType, value: JoinStyleType.Bevel as JoinStyleType.Bevel})},
  },
  changeCase: CaseStyle.SnakeCase,
});
