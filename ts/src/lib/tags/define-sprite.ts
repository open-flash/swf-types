import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { LiteralType } from "kryo/lib/literal.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16 } from "semantic-types";

import { $SpriteTag, SpriteTag } from "../sprite-tag.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineSprite extends _Tag {
  readonly type: TagType.DefineSprite;
  readonly id: Uint16;
  readonly frameCount: Uint16;
  readonly tags: ReadonlyArray<SpriteTag>;
}

export const $DefineSprite: RecordIoType<DefineSprite> = new RecordType<DefineSprite>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineSprite as TagType.DefineSprite})},
    id: {type: $Uint16},
    frameCount: {type: $Uint16},
    tags: {type: new ArrayType({itemType: $SpriteTag, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
