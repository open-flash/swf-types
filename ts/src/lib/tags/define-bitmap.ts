import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $ImageType, ImageType } from "../image-type.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface DefineBitmap extends _Tag {
  readonly type: TagType.DefineBitmap;
  readonly id: Uint16;
  readonly width: Uint16;
  readonly height: Uint16;
  readonly mediaType: ImageType;
  readonly data: Uint8Array;
}

export const $DefineBitmap: RecordIoType<DefineBitmap> = new RecordType<DefineBitmap>({
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
