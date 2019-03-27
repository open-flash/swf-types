import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineBinaryData extends _Tag {
  readonly type: TagType.DefineBinaryData;
  readonly id: Uint16;
  readonly data: Uint8Array;
}

export const $DefineBinaryData: DocumentIoType<DefineBinaryData> = new DocumentType<DefineBinaryData>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineBinaryData as TagType.DefineBinaryData})},
    id: {type: $Uint16},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
