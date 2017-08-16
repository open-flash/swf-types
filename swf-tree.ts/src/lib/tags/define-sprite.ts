import {ArrayType, CaseStyle, DocumentType, IntegerType, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {Tag} from "../tag";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface DefineSprite extends _Tag {
  type: TagType.DefineSprite;
  id: Uint16;
  frameCount: Uint16;
  tags: Tag[];
}

export namespace DefineSprite {
  export interface Json {
    type: "define-sprite";
    id: number;
    frame_count: number;
    tags: Tag.Json[];
  }

  export const type: DocumentType<DefineSprite> = new DocumentType<DefineSprite>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineSprite})},
      id: {type: new IntegerType()},
      frameCount: {type: new IntegerType()},
      tags: {type: new ArrayType({itemType: Tag.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
