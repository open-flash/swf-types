import { ArrayType, BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { TagType } from "../tags/_type";
import { ButtonCondAction } from "./button-cond-action";
import { ButtonRecord } from "./button-record";

export interface DefineButton2 extends _Tag {
  type: TagType.DefineButton2;
  buttonId: Uint16;
  trackAsMenu: boolean;
  characters: ButtonRecord[];
  actions: ButtonCondAction[];
}

export namespace DefineButton {
  export interface Json {
    type: "define-button2";
    button_id: number;
    track_as_menu: boolean;
    characters: ButtonRecord.Json[];
    actions: ButtonCondAction.Json[];
  }

  export const type: DocumentType<DefineButton2> = new DocumentType<DefineButton2>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineButton2})},
      buttonId: {type: new IntegerType()},
      trackAsMenu: {type: new BooleanType()},
      characters: {type: new ArrayType({itemType: ButtonRecord.type, maxLength: Infinity})},
      actions: {type: new ArrayType({itemType: ButtonCondAction.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
