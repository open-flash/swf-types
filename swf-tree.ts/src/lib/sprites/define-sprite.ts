import {ArrayType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Tag} from "../tag";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";

export interface DefineSprite extends _Tag {
  type: TagType.DefineSprite;
  spriteId: Uint16;
  frameCount: Uint16;
  controlTags: Tag[];
}

export namespace DefineSprite {
  export interface Json {
    type: "define-sprite";
    sprite_id: number;
    frame_count: number;
    control_tags: Tag.Json[];
  }

  export const type: DocumentType<DefineSprite> = new DocumentType<DefineSprite>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineSprite})},
      spriteId: {type: new Int32Type()},
      frameCount: {type: new Int32Type()},
      controlTags: {type: new ArrayType({itemType: Tag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
