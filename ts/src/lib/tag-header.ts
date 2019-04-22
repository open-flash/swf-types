import { $Uint16 } from "kryo/builtins/uint16";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16, Uint32 } from "semantic-types";

export interface TagHeader {
  code: Uint16;
  length: Uint32;
}

export const $TagHeader: DocumentIoType<TagHeader> = new DocumentType<TagHeader>({
  properties: {
    code: {type: $Uint16},
    length: {type: $Uint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
