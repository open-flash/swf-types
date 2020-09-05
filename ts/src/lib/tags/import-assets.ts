import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Ucs2StringType } from "kryo/lib/ucs2-string.js";
import { $NamedId, NamedId } from "../named-id.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface ImportAssets extends _Tag {
  readonly type: TagType.ImportAssets;
  readonly url: string;
  readonly assets: ReadonlyArray<NamedId>;
}

export const $ImportAssets: RecordIoType<ImportAssets> = new RecordType<ImportAssets>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.ImportAssets as TagType.ImportAssets})},
    url: {type: new Ucs2StringType({maxLength: Infinity})},
    assets: {type: new ArrayType({itemType: $NamedId, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
