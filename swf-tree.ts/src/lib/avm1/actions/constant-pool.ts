import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Ucs2StringType } from "kryo/types/ucs2-string";
import { $ActionType, ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface ConstantPool extends ActionBase {
  action: ActionType.ConstantPool;
  constantPool: string[];
}

export const $ConstantPool: DocumentIoType<ConstantPool> = new DocumentType<ConstantPool>({
  properties: {
    action: {type: new LiteralType({type: $ActionType, value: ActionType.ConstantPool as ActionType.ConstantPool})},
    constantPool: {type: new ArrayType({itemType: new Ucs2StringType({maxLength: Infinity}), maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
