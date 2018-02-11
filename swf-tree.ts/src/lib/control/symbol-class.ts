import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $NamedId, NamedId } from "../named-id";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";

export interface SymbolClass extends _Tag {
  type: TagType.SymbolClass;
  symbols: NamedId[];
}

export const $SymbolClass: DocumentIoType<SymbolClass> = new DocumentType<SymbolClass>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.SymbolClass as TagType.SymbolClass})},
    symbols: {type: new ArrayType({itemType: $NamedId, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
