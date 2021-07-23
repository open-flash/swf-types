import { CaseStyle } from "kryo";
import { $Bytes } from "kryo/bytes";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

export interface VideoFrame extends _Tag {
  type: TagType.VideoFrame;
  videoId: Uint16;
  frame: Uint16;
  packet: Uint8Array;
}

export const $VideoFrame: RecordIoType<VideoFrame> = new RecordType<VideoFrame>({
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
