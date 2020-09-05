import { $Boolean } from "kryo/lib/boolean.js";
import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { LiteralType } from "kryo/lib/literal.js";
import { Uint16 } from "semantic-types";
import { $VideoCodec, VideoCodec } from "../video/video-codec.js";
import { $VideoDeblocking, VideoDeblocking } from "../video/video-deblocking.js";
import { _Tag } from "./_tag.js";
import { $TagType, TagType } from "./_type.js";

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
