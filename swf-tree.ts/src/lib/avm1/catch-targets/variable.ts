import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {CatchTargetType} from "./_type";

export interface Variable {
  type: CatchTargetType.Variable;
  variable: string;
}

export namespace Variable {
  export interface Json {
    type: "variable";
    variable: string;
  }

  export const type: DocumentType<Variable> = new DocumentType<Variable>({
    properties: {
      type: {type: new LiteralType({type: CatchTargetType.type, value: CatchTargetType.Variable})},
      variable: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
