import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $ButtonSound, ButtonSound } from "../button/button-sound.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

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
