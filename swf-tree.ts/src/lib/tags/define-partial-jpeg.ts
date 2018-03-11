import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface DefinePartialJpeg extends _Tag {
  type: TagType.DefinePartialJpeg;
  id: Uint16;
  data: Uint8Array;
}

export const $DefinePartialJpeg: DocumentIoType<DefinePartialJpeg> = new DocumentType<DefinePartialJpeg>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefinePartialJpeg as TagType.DefinePartialJpeg})},
    id: {type: $Uint16},
    data: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
