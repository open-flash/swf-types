import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTag} from "../swf-tag";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface DefineSprite extends SwfTagBase {
  type: SwfTagType.DefineSprite;
  spriteId: Uint16;
  frameCount: Uint16;
  controlTags: SwfTag[];
}

export namespace DefineSprite {
  export interface Json {
    type: "define-sprite";
    sprite_id: number;
    frame_count: number;
    control_tags: SwfTag.Json[];
  }

  export const type: DocumentType<DefineSprite> = new DocumentType<DefineSprite>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineSprite})},
      spriteId: {type: new Int32Type()},
      frameCount: {type: new Int32Type()},
      controlTags: {type: new ArrayType({itemType: SwfTag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
