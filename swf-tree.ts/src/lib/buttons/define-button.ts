import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $Action } from "../avm1";
import { Action } from "../avm1/action";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";
import { $ButtonRecord, ButtonRecord } from "./button-record";

export interface DefineButton extends _Tag {
  type: TagType.DefineButton;
  buttonId: Uint16;
  characters: ButtonRecord[];
  actions: Action[];
}

export const $DefineButton: DocumentIoType<DefineButton> = new DocumentType<DefineButton>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineButton as TagType.DefineButton})},
    buttonId: {type: $Uint16},
    characters: {type: new ArrayType({itemType: $ButtonRecord, maxLength: Infinity})},
    actions: {type: new ArrayType({itemType: $Action, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
