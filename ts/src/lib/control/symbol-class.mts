import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";

import { $NamedId, NamedId } from "../named-id.mjs";
import { _Tag } from "../tags/_tag.mjs";
import { $TagType, TagType } from "../tags/_type.mjs";

export interface SymbolClass extends _Tag {
  type: TagType.SymbolClass;
  symbols: NamedId[];
}

export const $SymbolClass: RecordIoType<SymbolClass> = new RecordType<SymbolClass>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SymbolClass as TagType.SymbolClass})},
    symbols: {type: new ArrayType({itemType: $NamedId, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
