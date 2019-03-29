import { $Bytes } from "kryo/builtins/bytes";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { Uint32 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DoAbc extends _Tag {
  readonly type: TagType.DoAbc;
  readonly flags: Uint32;
  readonly name: string;
  readonly data: Uint8Array;
}

export const $DoAbc: DocumentIoType<DoAbc> = new DocumentType<DoAbc>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DoAbc as TagType.DoAbc})},
    flags: {type: $Uint32},
    name: {type: new Ucs2StringType({maxLength: Infinity})},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
