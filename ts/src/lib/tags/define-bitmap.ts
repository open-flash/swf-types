import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $ImageType, ImageType } from "../image-type";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineBitmap extends _Tag {
  readonly type: TagType.DefineBitmap;
  readonly id: Uint16;
  readonly width: Uint16;
  readonly height: Uint16;
  readonly mediaType: ImageType;
  readonly data: Uint8Array;
}

export const $DefineBitmap: DocumentIoType<DefineBitmap> = new DocumentType<DefineBitmap>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineBitmap as TagType.DefineBitmap})},
    id: {type: $Uint16},
    width: {type: $Uint16},
    height: {type: $Uint16},
    mediaType: {type: $ImageType},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
