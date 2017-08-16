import {CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Uint8} from "semantic-types";
import {CatchTargetType} from "./_type";

export interface Register {
  type: CatchTargetType.Register;
  register: Uint8;
}

export namespace Register {
  export interface Json {
    type: "register";
    register: number;
  }

  export const type: DocumentType<Register> = new DocumentType<Register>({
    properties: {
      type: {type: new LiteralType({type: CatchTargetType.type, value: CatchTargetType.Register})},
      register: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
