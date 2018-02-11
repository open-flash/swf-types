import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { $CatchTargetType, CatchTargetType } from "./_type";

export interface Variable {
  type: CatchTargetType.Variable;
  variable: string;
}

export const $Variable: DocumentIoType<Variable> = new DocumentType<Variable>({
  properties: {
    type: {
      type: new LiteralType({
        type: $CatchTargetType,
        value: CatchTargetType.Variable as CatchTargetType.Variable,
      }),
    },
    variable: {type: new Ucs2StringType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
