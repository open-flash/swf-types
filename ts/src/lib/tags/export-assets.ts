import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $NamedId, NamedId } from "../named-id.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface ExportAssets extends _Tag {
  readonly type: TagType.ExportAssets;
  readonly assets: ReadonlyArray<NamedId>;
}

export const $ExportAssets: RecordIoType<ExportAssets> = new RecordType<ExportAssets>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.ExportAssets as TagType.ExportAssets})},
    assets: {type: new ArrayType({itemType: $NamedId, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
