import { BooleanType, CaseStyle, DocumentType, IntegerType, LiteralType } from "kryo";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { TagType } from "../tags/_type";
import { VideoCodec } from "./video-codec";
import { VideoDeblocking } from "./video-deblocking";

export interface DefineVideoStream extends _Tag {
  type: TagType.DefineVideoStream;
  characterId: Uint16;
  frameCount: Uint16;
  width: Uint16;
  height: Uint16;
  deblocking: VideoDeblocking;
  useVideoSmoothing: boolean;
  codec: VideoCodec;
}

export namespace DefineVideoStream {
  export interface Json {
    type: "define-video-stream";
    character_id: number;
    frame_count: number;
    width: number;
    height: number;
    deblocking: VideoDeblocking.Json;
    use_video_smoothing: boolean;
    codec: VideoCodec.Json;
  }

  export const type: DocumentType<DefineVideoStream> = new DocumentType<DefineVideoStream>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.DefineVideoStream})},
      characterId: {type: new IntegerType()},
      frameCount: {type: new IntegerType()},
      width: {type: new IntegerType()},
      height: {type: new IntegerType()},
      deblocking: {type: VideoDeblocking.type},
      useVideoSmoothing: {type: new BooleanType()},
      codec: {type: VideoCodec.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
