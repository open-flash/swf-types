import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { $NamedId, NamedId } from "../named-id";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface ImportAssets extends _Tag {
  type: TagType.ImportAssets;
  url: string;
  assets: NamedId[];
}

export const $ImportAssets: DocumentIoType<ImportAssets> = new DocumentType<ImportAssets>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.ImportAssets as TagType.ImportAssets})},
    url: {type: new Ucs2StringType({maxLength: Infinity})},
    assets: {type: new ArrayType({itemType: $NamedId, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
