import {ArrayType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {NamedTag} from "./named-tag";

export interface SymbolClass extends SwfTagBase {
  type: SwfTagType.SymbolClass;
  symbols: NamedTag[];
}

export namespace SymbolClass {
  export interface Json {
    type: "symbol-class";
    symbols: NamedTag.Json[];
  }

  export const type: DocumentType<SymbolClass> = new DocumentType<SymbolClass>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.SymbolClass})},
      symbols: {type: new ArrayType({itemType: NamedTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
