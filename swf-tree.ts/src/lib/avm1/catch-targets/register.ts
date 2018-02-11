import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint8 } from "semantic-types";
import { $CatchTargetType, CatchTargetType } from "./_type";

export interface Register {
  type: CatchTargetType.Register;
  register: Uint8;
}

export const $Register: DocumentIoType<Register> = new DocumentType<Register>({
  properties: {
    type: {
      type: new LiteralType({
        type: $CatchTargetType,
        value: CatchTargetType.Register as CatchTargetType.Register,
      }),
    },
    register: {type: $Uint8},
  },
  changeCase: CaseStyle.SnakeCase,
});
