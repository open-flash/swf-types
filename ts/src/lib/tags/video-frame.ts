import { $Bytes } from "kryo/builtins/bytes";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

export interface VideoFrame extends _Tag {
  type: TagType.VideoFrame;
  videoId: Uint16;
  frame: Uint16;
  packet: Uint8Array;
}

export const $VideoFrame: DocumentIoType<VideoFrame> = new DocumentType<VideoFrame>({
  properties: {
    type: {
      type: new LiteralType({
        type: $TagType,
        value: TagType.VideoFrame as TagType.VideoFrame,
      }),
    },
    videoId: {type: $Uint16},
    frame: {type: $Uint16},
    packet: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
