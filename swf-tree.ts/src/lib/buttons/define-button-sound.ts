import { CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { TagType } from "../tags/_type";
import { ButtonSound } from "./button-sound";

export interface DefineButtonSound extends _Tag {
  type: TagType.DefineButtonSound;
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
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineButtonSound})},
      buttonId: {type: new IntegerType()},
      overUpToIdle: {type: ButtonSound.type, optional: true},
      idleToOverUp: {type: ButtonSound.type, optional: true},
      overUpToOverDown: {type: ButtonSound.type, optional: true},
      overDownToOverUp: {type: ButtonSound.type, optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
