import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $ButtonCondAction, ButtonCondAction } from "../button/button-cond-action.mjs";
import { $ButtonRecord, ButtonRecord } from "../button/button-record.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface DefineButton extends _Tag {
  readonly type: TagType.DefineButton;
  readonly id: Uint16;
  readonly trackAsMenu: boolean;
  readonly records: ReadonlyArray<ButtonRecord>;
  readonly actions: ReadonlyArray<ButtonCondAction>;
}

export const $DefineButton: RecordIoType<DefineButton> = new RecordType<DefineButton>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineButton as TagType.DefineButton})},
    id: {type: $Uint16},
    trackAsMenu: {type: $Boolean},
    records: {type: new ArrayType({itemType: $ButtonRecord, maxLength: Infinity})},
    actions: {type: new ArrayType({itemType: $ButtonCondAction, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
