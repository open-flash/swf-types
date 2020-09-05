import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface RemoveObject extends _Tag {
  readonly type: TagType.RemoveObject;
  readonly characterId?: Uint16;
  readonly depth: Uint16;
}

export const $RemoveObject: RecordIoType<RemoveObject> = new RecordType<RemoveObject>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.RemoveObject as TagType.RemoveObject})},
    characterId: {type: $Uint16, optional: true},
    depth: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
