import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Ucs2StringType } from "kryo/ucs2-string";

import { $NamedId, NamedId } from "../named-id.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

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
