import {ArrayType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {NamedTag} from "./named-tag";

export interface SymbolClass extends _Tag {
  type: TagType.SymbolClass;
  symbols: NamedTag[];
}

export namespace SymbolClass {
  export interface Json {
    type: "symbol-class";
    symbols: NamedTag.Json[];
  }

  export const type: DocumentType<SymbolClass> = new DocumentType<SymbolClass>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SymbolClass})},
      symbols: {type: new ArrayType({itemType: NamedTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
