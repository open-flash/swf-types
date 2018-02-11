import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface RemoveObject extends _Tag {
  type: TagType.RemoveObject;
  characterId?: Uint16;
  depth: Uint16;
}

export const $RemoveObject: DocumentIoType<RemoveObject> = new DocumentType<RemoveObject>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.RemoveObject as TagType.RemoveObject})},
    characterId: {type: $Uint16, optional: true},
    depth: {type: $Uint16},
  },
  changeCase: CaseStyle.SnakeCase,
});
