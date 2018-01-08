import { CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface RemoveObject extends _Tag {
  type: TagType.RemoveObject;
  characterId?: Uint16;
  depth: Uint16;
}

export namespace RemoveObject {
  export interface Json {
    type: "remove-object";
    character_id?: number;
    depth: number;
  }

  export const type: DocumentType<RemoveObject> = new DocumentType<RemoveObject>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.RemoveObject})},
      characterId: {type: new IntegerType(), optional: true},
      depth: {type: new IntegerType()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
