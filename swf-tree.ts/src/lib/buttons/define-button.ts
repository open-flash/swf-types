import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Action} from "../avm1/action";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {ButtonRecord} from "./button-record";

export interface DefineButton extends SwfTagBase {
  type: SwfTagType.DefineButton;
  buttonId: Uint16;
  characters: ButtonRecord[];
  actions: Action[];
}

export namespace DefineButton {
  export interface Json {
    type: "define-button";
    "button-id": number;
    "characters": ButtonRecord.Json[];
    "actions": Action.Json[];
  }

  export const type: DocumentType<DefineButton> = new DocumentType<DefineButton>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineButton})},
      buttonId: {type: new Int32Type()},
      characters: {type: new ArrayType({itemType: ButtonRecord.type, maxLength: Infinity})},
      actions: {type: new ArrayType({itemType: Action.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
