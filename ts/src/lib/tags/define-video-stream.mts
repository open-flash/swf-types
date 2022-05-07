import { CaseStyle } from "kryo";
import { $Boolean } from "kryo/boolean";
import { $Uint16 } from "kryo/integer";
import { LiteralType } from "kryo/literal";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint16 } from "semantic-types";

import { $VideoCodec, VideoCodec } from "../video/video-codec.mjs";
import { $VideoDeblocking, VideoDeblocking } from "../video/video-deblocking.mjs";
import { _Tag } from "./_tag.mjs";
import { $TagType, TagType } from "./_type.mjs";

export interface DefineVideoStream extends _Tag {
  type: TagType.DefineVideoStream;
  id: Uint16;
  frameCount: Uint16;
  width: Uint16;
  height: Uint16;
  useSmoothing: boolean;
  deblocking: VideoDeblocking;
  codec: VideoCodec;
}

export const $DefineVideoStream: RecordIoType<DefineVideoStream> = new RecordType<DefineVideoStream>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineVideoStream as TagType.DefineVideoStream})},
    id: {type: $Uint16},
    frameCount: {type: $Uint16},
    width: {type: $Uint16},
    height: {type: $Uint16},
    useSmoothing: {type: $Boolean},
    deblocking: {type: $VideoDeblocking},
    codec: {type: $VideoCodec},
  },
  changeCase: CaseStyle.SnakeCase,
});
