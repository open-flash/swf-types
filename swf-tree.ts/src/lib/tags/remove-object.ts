import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface RemoveObject extends _Tag {
  type: TagType.RemoveObject;
  depth: Uint16;
  characterId?: Uint16;
}

export namespace RemoveObject {
  export interface Json {
    type: "remove-object";
    depth: number;
    character_id?: number;
  }

  export const type: DocumentType<RemoveObject> = new DocumentType<RemoveObject>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.RemoveObject})},
      depth: {type: new Int32Type()},
      characterId: {type: new Int32Type(), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
