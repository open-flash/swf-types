import {BooleanType, CaseStyle, DocumentType, LiteralType} from "kryo";
import {ValueType} from "../value-type";

export interface Boolean {
  type: ValueType.Boolean;
  value: boolean;
}

export namespace Boolean {
  export interface Json {
    type: "boolean";
    value: boolean;
  }

  export const type: DocumentType<Boolean> = new DocumentType<Boolean>({
    properties: {
      type: {type: new LiteralType({type: ValueType.type, value: ValueType.Boolean})},
      value: {type: new BooleanType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
