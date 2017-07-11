import {CaseStyle, DocumentType, LiteralType} from "kryo";
import {ValueType} from "../value-type";

export interface Null {
  type: ValueType.Null;
}

export namespace Null {
  export interface Json {
    type: "null";
  }

  export const type: DocumentType<Null> = new DocumentType<Null>({
    properties: {
      type: {type: new LiteralType({type: ValueType.type, value: ValueType.Null})},
    },
    rename: CaseStyle.KebabCase,
  });
}
