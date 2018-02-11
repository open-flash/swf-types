import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";
import { $ButtonCondAction, ButtonCondAction } from "./button-cond-action";
import { $ButtonRecord, ButtonRecord } from "./button-record";

export interface DefineButton2 extends _Tag {
  type: TagType.DefineButton2;
  buttonId: Uint16;
  trackAsMenu: boolean;
  characters: ButtonRecord[];
  actions: ButtonCondAction[];
}

export const $DefineButton2: DocumentIoType<DefineButton2> = new DocumentType<DefineButton2>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineButton2 as TagType.DefineButton2})},
    buttonId: {type: $Uint16},
    trackAsMenu: {type: $Boolean},
    characters: {type: new ArrayType({itemType: $ButtonRecord, maxLength: Infinity})},
    actions: {type: new ArrayType({itemType: $ButtonCondAction, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
