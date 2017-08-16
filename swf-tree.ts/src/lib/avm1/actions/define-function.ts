import {ArrayType, CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {Action} from "../action";
import {ActionType} from "../action-type";
import {ActionBase} from "./_base";

export interface DefineFunction extends ActionBase {
  action: ActionType.DefineFunction;
  name: string;
  parameters: string[];
  body: Action[];
}

export namespace DefineFunction {
  export interface Json {
    action: "define-function";
    name: string;
    parameters: string[];
    body: Action.Json[];
  }

  export const type: DocumentType<DefineFunction> = new DocumentType<DefineFunction>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.DefineFunction})},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
      parameters: {
        type: new ArrayType({
          itemType: new Ucs2StringType({maxLength: Infinity}),
          maxLength: Infinity,
        }),
      },
      body: {type: new ArrayType({itemType: Action.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
