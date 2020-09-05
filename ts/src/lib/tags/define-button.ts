import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { $Boolean } from "kryo/lib/boolean.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { $ButtonCondAction, ButtonCondAction } from "../button/button-cond-action.js";
import { $ButtonRecord, ButtonRecord } from "../button/button-record.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineButton extends _Tag {
  readonly type: TagType.DefineButton;
  readonly id: Uint16;
  readonly trackAsMenu: boolean;
  // TODO: Rename to records (to match DefineShape)
  readonly characters: ReadonlyArray<ButtonRecord>;
  readonly actions: ReadonlyArray<ButtonCondAction>;
}

export const $DefineButton: RecordIoType<DefineButton> = new RecordType<DefineButton>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineButton as TagType.DefineButton})},
    id: {type: $Uint16},
    trackAsMenu: {type: $Boolean},
    characters: {type: new ArrayType({itemType: $ButtonRecord, maxLength: Infinity})},
    actions: {type: new ArrayType({itemType: $ButtonCondAction, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
