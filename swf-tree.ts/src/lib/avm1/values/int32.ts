import {CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Sint32 as Int32Primitive} from "semantic-types";
import {ValueType} from "../value-type";

export interface Int32 {
  type: ValueType.Int32;
  value: Int32Primitive;
}

export namespace Int32 {
  export interface Json {
    type: "int32";
    value: number;
  }

  export const type: DocumentType<Int32> = new DocumentType<Int32>({
    properties: {
      type: {type: new LiteralType({type: ValueType.type, value: ValueType.Int32})},
      value: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
