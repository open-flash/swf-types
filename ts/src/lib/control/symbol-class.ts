import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";

import { $NamedId, NamedId } from "../named-id.js";
import { _Tag } from "../tags/_tag.js";
import { $TagType, TagType } from "../tags/_type.js";

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
