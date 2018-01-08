import { ArrayType, CaseStyle, DocumentType, LiteralType, Ucs2StringType } from "kryo";
import { ActionType } from "../action-type";
import { ActionBase } from "./_base";

export interface ConstantPool extends ActionBase {
  action: ActionType.ConstantPool;
  constantPool: string[];
}

export namespace ConstantPool {
  export interface Json {
    action: "constant-pool";
    constant_pool: string[];
  }

  export const type: DocumentType<ConstantPool> = new DocumentType<ConstantPool>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.ConstantPool})},
      constantPool: {type: new ArrayType({itemType: new Ucs2StringType({maxLength: Infinity}), maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
