import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint16 } from "semantic-types";

export interface NamedId {
  id: Uint16;
  name: string;
}

export const $NamedId: DocumentIoType<NamedId> = new DocumentType<NamedId>({
  properties: {
    id: {type: $Uint16},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
