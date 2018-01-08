import { CaseStyle, DocumentType, LiteralType } from "kryo";
import { ValueType } from "../value-type";

export interface Undefined {
  type: ValueType.Undefined;
}

export namespace Undefined {
  export interface Json {
    type: "undefined";
  }

  export const type: DocumentType<Undefined> = new DocumentType<Undefined>({
    properties: {
      type: {type: new LiteralType({type: ValueType.type, value: ValueType.Undefined})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
