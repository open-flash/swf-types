import { $Boolean as _$Boolean } from "kryo/builtins/boolean";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { $ValueType, ValueType } from "../value-type";

export interface Boolean {
  type: ValueType.Boolean;
  value: boolean;
}

export const $Boolean: DocumentIoType<Boolean> = new DocumentType<Boolean>({
  properties: {
    type: {type: new LiteralType({type: $ValueType, value: ValueType.Boolean as ValueType.Boolean})},
    value: {type: _$Boolean},
  },
  changeCase: CaseStyle.SnakeCase,
});
