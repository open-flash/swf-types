import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { IntegerType } from "kryo/types/integer";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineBinaryData extends _Tag {
  type: TagType.DefineBinaryData;
  id: Uint16;
  data: Uint8Array;
}

export const $DefineBinaryData: DocumentIoType<DefineBinaryData> = new DocumentType<DefineBinaryData>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineBinaryData as TagType.DefineBinaryData})},
    id: {type: new IntegerType()},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
