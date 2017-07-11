import {CaseStyle, DocumentType, Float64Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {ValueType} from "../value-type";

export interface Constant {
  type: ValueType.Constant;
  value: Uint16;
}

export namespace Constant {
  export interface Json {
    type: "constant";
    value: number;
  }

  export const type: DocumentType<Constant> = new DocumentType<Constant>({
    properties: {
      type: {type: new LiteralType({type: ValueType.type, value: ValueType.Constant})},
      value: {type: new Float64Type()},
    },
    rename: CaseStyle.KebabCase,
  });
}
