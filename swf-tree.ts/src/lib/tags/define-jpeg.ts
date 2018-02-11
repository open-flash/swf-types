import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefineJpeg extends _Tag {
  type: TagType.DefineJpeg;
  id: Uint16;
  image: Uint8Array;
  alpha?: Uint8Array;
  deblocking?: Uint16;
}

export const $DefineJpeg: DocumentIoType<DefineJpeg> = new DocumentType<DefineJpeg>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineJpeg as TagType.DefineJpeg})},
    id: {type: $Uint16},
    image: {type: new BufferType({maxLength: Infinity})},
    alpha: {type: new BufferType({maxLength: Infinity}), optional: true},
    deblocking: {type: $Uint16, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
