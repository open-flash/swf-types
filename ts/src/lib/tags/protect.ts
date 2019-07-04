import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface Protect extends _Tag {
  readonly type: TagType.Protect;
  readonly password: string;
}

export const $Protect: DocumentIoType<Protect> = new DocumentType<Protect>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.Protect as TagType.Protect})},
    password: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
