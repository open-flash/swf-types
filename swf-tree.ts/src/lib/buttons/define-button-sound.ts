import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {ButtonSound} from "./button-sound";

export interface DefineButtonSound extends SwfTagBase {
  type: SwfTagType.DefineButtonSound;
  buttonId: Uint16;
  overUpToIdle?: ButtonSound;
  idleToOverUp?: ButtonSound;
  overUpToOverDown?: ButtonSound;
  overDownToOverUp?: ButtonSound;
}

export namespace DefineButtonSound {
  export interface Json {
    type: "define-button-sound";
    button_id: number;
    over_up_to_idle?: ButtonSound.Json;
    idle_to_over_up?: ButtonSound.Json;
    over_up_to_over_down?: ButtonSound.Json;
    over_down_to_over_up?: ButtonSound.Json;
  }

  export const type: DocumentType<DefineButtonSound> = new DocumentType<DefineButtonSound>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineButtonSound})},
      buttonId: {type: new Int32Type()},
      overUpToIdle: {type: ButtonSound.type, optional: true},
      idleToOverUp: {type: ButtonSound.type, optional: true},
      overUpToOverDown: {type: ButtonSound.type, optional: true},
      overDownToOverUp: {type: ButtonSound.type, optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
