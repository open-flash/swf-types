import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $AbcHeader, AbcHeader } from "../control/abc-header";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DoAbc extends _Tag {
  type: TagType.DoAbc;
  header?: AbcHeader;
  data: Uint8Array;
}

export const $DoAbc: DocumentIoType<DoAbc> = new DocumentType<DoAbc>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DoAbc as TagType.DoAbc})},
    header: {type: $AbcHeader, optional: true},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
