import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { $Uint32 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint32 } from "semantic-types";

export interface ButtonCond {
  idleToOverUp: boolean;
  overUpToIdle: boolean;
  overUpToOverDown: boolean;
  overDownToOverUp: boolean;
  overDownToOutDown: boolean;
  outDownToOverDown: boolean;
  outDownToIdle: boolean;
  idleToOverDown: boolean;
  overDownToIdle: boolean;
  keyPress?: Uint32;
}

export const $ButtonCond: RecordIoType<ButtonCond> = new RecordType<ButtonCond>({
  properties: {
    idleToOverUp: {type: $Boolean},
    overUpToIdle: {type: $Boolean},
    overUpToOverDown: {type: $Boolean},
    overDownToOverUp: {type: $Boolean},
    overDownToOutDown: {type: $Boolean},
    outDownToOverDown: {type: $Boolean},
    outDownToIdle: {type: $Boolean},
    idleToOverDown: {type: $Boolean},
    overDownToIdle: {type: $Boolean},
    keyPress: {type: $Uint32, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
