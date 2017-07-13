import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {_Tag} from "../tags/_tag";
import {TagType} from "../tags/_type";
import {H263VideoPacket} from "./h263-video-packet";
import {ScreenVideoPacket} from "./screen-video-packet";
import {Screen2VideoPacket} from "./screen2-video-packet";
import {Vp6SwfAlphaVideoPacket} from "./vp6-swf-alpha-video-packet";
import {Vp6SwfVideoPacket} from "./vp6-swf-video-packet";

export interface VideoFrame extends _Tag {
  type: TagType.VideoFrame;
  streamId: Uint16;
  frameNum: Uint16;
  videoData: H263VideoPacket
    | ScreenVideoPacket
    | Screen2VideoPacket
    | Vp6SwfVideoPacket
    | Vp6SwfAlphaVideoPacket
    | Screen2VideoPacket;
}

export namespace VideoFrame {
  export interface Json {
    type: "video-frame";
    stream_id: number;
    frame_num: number;
    video_data: H263VideoPacket
      | ScreenVideoPacket
      | Screen2VideoPacket
      | Vp6SwfVideoPacket
      | Vp6SwfAlphaVideoPacket
      | Screen2VideoPacket;
  }

  export const type: DocumentType<VideoFrame> = new DocumentType<VideoFrame>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.VideoFrame})},
      streamId: {type: new Int32Type()},
      frameNum: {type: new Int32Type()},
      videoData: {type: null as any},
    },
    rename: CaseStyle.SnakeCase,
  });
}
