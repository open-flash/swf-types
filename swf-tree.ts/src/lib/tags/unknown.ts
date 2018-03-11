import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface Unknown extends _Tag {
  type: TagType.Unknown;
  code: Uint16;
  data: Uint8Array;
}

export const $Unknown: DocumentIoType<Unknown> = new DocumentType<Unknown>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Unknown as TagType.Unknown})},
    code: {type: $Uint16},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
