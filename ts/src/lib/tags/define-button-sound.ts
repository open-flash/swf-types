import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $ButtonSound, ButtonSound } from "../button/button-sound";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineButtonSound extends _Tag {
  type: TagType.DefineButtonSound;
  buttonId: Uint16;
  overUpToIdle?: ButtonSound;
  idleToOverUp?: ButtonSound;
  overUpToOverDown?: ButtonSound;
  overDownToOverUp?: ButtonSound;
}

export const $DefineButtonSound: DocumentIoType<DefineButtonSound> = new DocumentType<DefineButtonSound>({
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
