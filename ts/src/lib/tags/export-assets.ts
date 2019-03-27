import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $NamedId, NamedId } from "../named-id";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface ExportAssets extends _Tag {
  readonly type: TagType.ExportAssets;
  readonly assets: ReadonlyArray<NamedId>;
}

export const $ExportAssets: DocumentIoType<ExportAssets> = new DocumentType<ExportAssets>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.ExportAssets as TagType.ExportAssets})},
    assets: {type: new ArrayType({itemType: $NamedId, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
