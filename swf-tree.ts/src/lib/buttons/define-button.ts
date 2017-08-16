import {ArrayType, CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Action} from "../avm1/action";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {ButtonRecord} from "./button-record";

export interface DefineButton extends _Tag {
  type: TagType.DefineButton;
  buttonId: Uint16;
  characters: ButtonRecord[];
  actions: Action[];
}

export namespace DefineButton {
  export interface Json {
    type: "define-button";
    button_id: number;
    characters: ButtonRecord.Json[];
    actions: Action.Json[];
  }

  export const type: DocumentType<DefineButton> = new DocumentType<DefineButton>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineButton})},
      buttonId: {type: new IntegerType()},
      characters: {type: new ArrayType({itemType: ButtonRecord.type, maxLength: Infinity})},
      actions: {type: new ArrayType({itemType: Action.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
