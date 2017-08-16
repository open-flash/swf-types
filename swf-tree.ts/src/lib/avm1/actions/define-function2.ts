import {ArrayType, BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType, Ucs2StringType} from "kryo";
import {UintSize} from "semantic-types";
import {Action} from "../action";
import {ActionType} from "../action-type";
import {Parameter} from "../parameter";
import {ActionBase} from "./_base";

export interface DefineFunction2 extends ActionBase {
  action: ActionType.DefineFunction2;
  name: string;
  preloadParent: boolean;
  preloadRoot: boolean;
  suppressSuper: boolean;
  preloadSuper: boolean;
  suppressArguments: boolean;
  preloadArguments: boolean;
  suppressThis: boolean;
  preloadThis: boolean;
  preloadGlobal: boolean;
  registerCount: UintSize;
  parameters: Parameter[];
  body: Action[];
}

export namespace DefineFunction2 {
  export interface Json {
    action: "define-function2";
    name: string;
    preload_parent: boolean;
    preload_root: boolean;
    suppress_super: boolean;
    preload_super: boolean;
    suppress_arguments: boolean;
    preload_arguments: boolean;
    suppress_this: boolean;
    preload_this: boolean;
    preload_global: boolean;
    register_count: number;
    parameters: Parameter.Json[];
    body: Action.Json[];
  }

  export const type: DocumentType<DefineFunction2> = new DocumentType<DefineFunction2>({
    properties: {
      action: {type: new LiteralType({type: ActionType.type, value: ActionType.DefineFunction2})},
      name: {type: new Ucs2StringType({maxLength: Infinity})},
      preloadParent: {type: new BooleanType()},
      preloadRoot: {type: new BooleanType()},
      suppressSuper: {type: new BooleanType()},
      preloadSuper: {type: new BooleanType()},
      suppressArguments: {type: new BooleanType()},
      preloadArguments: {type: new BooleanType()},
      suppressThis: {type: new BooleanType()},
      preloadThis: {type: new BooleanType()},
      preloadGlobal: {type: new BooleanType()},
      registerCount: {type: new IntegerType()},
      parameters: {type: new ArrayType({itemType: Parameter.type, maxLength: Infinity})},
      body: {type: new ArrayType({itemType: Action.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
