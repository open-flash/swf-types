import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { SpriteTag } from "..";
import { $SpriteTag } from "../sprite-tag";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineSprite extends _Tag {
  type: TagType.DefineSprite;
  id: Uint16;
  frameCount: Uint16;
  tags: SpriteTag[];
}

export const $DefineSprite: DocumentIoType<DefineSprite> = new DocumentType<DefineSprite>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineSprite as TagType.DefineSprite})},
    id: {type: $Uint16},
    frameCount: {type: $Uint16},
    tags: {type: new ArrayType({itemType: $SpriteTag, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
