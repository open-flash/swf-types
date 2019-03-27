import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface EnableDebugger extends _Tag {
  readonly type: TagType.EnableDebugger;
  readonly password: string;
}

export const $EnableDebugger: DocumentIoType<EnableDebugger> = new DocumentType<EnableDebugger>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.EnableDebugger as TagType.EnableDebugger})},
    password: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
