import { CaseStyle } from "kryo";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $ButtonSound, ButtonSound } from "../button/button-sound.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface DefineButtonSound extends _Tag {
  type: TagType.DefineButtonSound;
  buttonId: Uint16;
  overUpToIdle?: ButtonSound;
  idleToOverUp?: ButtonSound;
  overUpToOverDown?: ButtonSound;
  overDownToOverUp?: ButtonSound;
}

export const $DefineButtonSound: RecordIoType<DefineButtonSound> = new RecordType<DefineButtonSound>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineButtonSound as TagType.DefineButtonSound})},
    buttonId: {type: $Uint16},
    overUpToIdle: {type: $ButtonSound, optional: true},
    idleToOverUp: {type: $ButtonSound, optional: true},
    overUpToOverDown: {type: $ButtonSound, optional: true},
    overDownToOverUp: {type: $ButtonSound, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
