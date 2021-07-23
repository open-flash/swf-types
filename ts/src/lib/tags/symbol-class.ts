import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $NamedId, NamedId } from "../named-id.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface SymbolClass extends _Tag {
  readonly type: TagType.SymbolClass;
  readonly symbols: ReadonlyArray<NamedId>;
}

export const $SymbolClass: RecordIoType<SymbolClass> = new RecordType<SymbolClass>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SymbolClass as TagType.SymbolClass})},
    symbols: {type: new ArrayType({itemType: $NamedId, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
