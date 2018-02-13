import { $Boolean } from "kryo/builtins/boolean";
import { $Uint32 } from "kryo/builtins/uint32";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint32 } from "semantic-types";

export interface ButtonCond {
  idleToOverDown: boolean;
  outDownToIdle: boolean;
  outDownToOverDown: boolean;
  overDownToOutDown: boolean;
  overDownToOverUp: boolean;
  overUpToOverDown: boolean;
  overUpToIdle: boolean;
  idleToOverUp: boolean;
  overDownToIdle: boolean;
  keyPress?: Uint32;
}

export const $ButtonCond: DocumentIoType<ButtonCond> = new DocumentType<ButtonCond>({
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
    keyPress: {type: $Uint32, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
