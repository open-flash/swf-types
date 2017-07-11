import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Action} from "../avm1/action";
import {Uint32} from "semantic-types";

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
    "idle-to-over-down": boolean;
    "out-down-to-idle": boolean;
    "out-down-to-over-down": boolean;
    "over-down-to-out-down": boolean;
    "over-down-to-over-up": boolean;
    "over-up-to-over-down": boolean;
    "over-up-to-idle": boolean;
    "idle-to-over-up": boolean;
    "over-down-to-idle": boolean;
    "key-press": number;
    "actions": Action.Json[];
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
    rename: CaseStyle.KebabCase,
  });
}
