import {BufferType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {_Tag} from "./_tag";
import {TagType} from "./_type";

export interface DefineBitmap extends _Tag {
  type: TagType.DefineBitmap;
  id: Uint16;
  width: Uint16;
  height: Uint16;
  data: Uint8Array;
}

export namespace DefineBitmap {
  export interface Json {
    type: "define-bitmap";
    id: number;
    width: number;
    height: number;
    data: string;
  }

  export const type: DocumentType<DefineBitmap> = new DocumentType<DefineBitmap>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineBitmap})},
      id: {type: new Int32Type()},
      width: {type: new Int32Type()},
      height: {type: new Int32Type()},
      data: {type: new BufferType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
