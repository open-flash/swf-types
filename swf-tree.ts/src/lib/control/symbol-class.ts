import {ArrayType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {NamedId} from "../named-id";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface SymbolClass extends _Tag {
  type: TagType.SymbolClass;
  symbols: NamedId[];
}

export namespace SymbolClass {
  export interface Json {
    type: "symbol-class";
    symbols: NamedId.Json[];
  }

  export const type: DocumentType<SymbolClass> = new DocumentType<SymbolClass>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SymbolClass})},
      symbols: {type: new ArrayType({itemType: NamedId.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
