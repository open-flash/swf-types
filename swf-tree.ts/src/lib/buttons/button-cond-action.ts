import { $Boolean } from "kryo/builtins/boolean";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint32 } from "semantic-types";
import { $Action } from "../avm1";
import { Action } from "../avm1/action";

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

export const $ButtonCondAction: DocumentIoType<ButtonCondAction> = new DocumentType<ButtonCondAction>({
  properties: {
    idleToOverDown: {type: $Boolean},
    outDownToIdle: {type: $Boolean},
    outDownToOverDown: {type: $Boolean},
    overDownToOutDown: {type: $Boolean},
    overDownToOverUp: {type: $Boolean},
    overUpToOverDown: {type: $Boolean},
    overUpToIdle: {type: $Boolean},
    idleToOverUp: {type: $Boolean},
    overDownToIdle: {type: $Boolean},
    keyPress: {type: $Uint32},
    actions: {type: new ArrayType({itemType: $Action, maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
