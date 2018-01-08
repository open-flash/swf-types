import { CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint8 } from "semantic-types";
import { ValueType } from "../value-type";

export interface Register {
  type: ValueType.Register;
  value: Uint8;
}

export namespace Register {
  export interface Json {
    type: "register";
    value: number;
  }

  export const type: DocumentType<Register> = new DocumentType<Register>({
    properties: {
      type: {type: new LiteralType({type: ValueType.type, value: ValueType.Register})},
      value: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
