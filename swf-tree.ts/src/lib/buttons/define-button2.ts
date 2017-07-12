import {ArrayType, BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {ButtonCondAction} from "./button-cond-action";
import {ButtonRecord} from "./button-record";

export interface DefineButton2 extends SwfTagBase {
  type: SwfTagType.DefineButton2;
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
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineButton2})},
      buttonId: {type: new Int32Type()},
      trackAsMenu: {type: new BooleanType()},
      characters: {type: new ArrayType({itemType: ButtonRecord.type, maxLength: Infinity})},
      actions: {type: new ArrayType({itemType: ButtonCondAction.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
