import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint32} from "semantic-types";
import {Action} from "../avm1/action";

export interface ButtonCondAction {
  idleToOverDown: boolean;
  outDownToIdle: boolean;
  outDownToOverDown: boolean;
  overDownToOutDown: boolean;
  overDownToOverUp: boolean;
  overUpToOverDown: boolean;
  overUpToIdle: boolean;
  idleToOverUp: boolean;
  overDownToIdle: boolean;
  keyPress: Uint32;
  actions: Action[];
}

export namespace ButtonCondAction {
  export interface Json {
    idle_to_over_down: boolean;
    out_down_to_idle: boolean;
    out_down_to_over_down: boolean;
    over_down_to_out_down: boolean;
    over_down_to_over_up: boolean;
    over_up_to_over_down: boolean;
    over_up_to_idle: boolean;
    idle_to_over_up: boolean;
    over_down_to_idle: boolean;
    key_press: number;
    actions: Action.Json[];
  }

  export const type: DocumentType<ButtonCondAction> = new DocumentType<ButtonCondAction>({
    properties: {
      idleToOverDown: {type: new BooleanType()},
      outDownToIdle: {type: new BooleanType()},
      outDownToOverDown: {type: new BooleanType()},
      overDownToOutDown: {type: new BooleanType()},
      overDownToOverUp: {type: new BooleanType()},
      overUpToOverDown: {type: new BooleanType()},
      overUpToIdle: {type: new BooleanType()},
      idleToOverUp: {type: new BooleanType()},
      overDownToIdle: {type: new BooleanType()},
      keyPress: {type: new Int32Type()},
      actions: {type: new ArrayType({itemType: Action.type, maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
