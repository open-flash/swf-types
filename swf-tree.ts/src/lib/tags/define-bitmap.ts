import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineBitmap extends _Tag {
  type: TagType.DefineBitmap;
  id: Uint16;
  width: Uint16;
  height: Uint16;
  data: Uint8Array;
}

export const $DefineBitmap: DocumentIoType<DefineBitmap> = new DocumentType<DefineBitmap>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineBitmap as TagType.DefineBitmap})},
    id: {type: $Uint16},
    width: {type: $Uint16},
    height: {type: $Uint16},
    data: {type: new BufferType({maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
