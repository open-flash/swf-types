import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint32 } from "semantic-types";

export interface AbcHeader {
  readonly flags: Uint32;
  readonly name: string;
}

export const $AbcHeader: DocumentIoType<AbcHeader> = new DocumentType<AbcHeader>({
  properties: {
    flags: {type: $Uint32},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
