import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {H263VideoPacket} from "./h263-video-packet";
import {ScreenVideoPacket} from "./screen-video-packet";
import {Screen2VideoPacket} from "./screen2-video-packet";
import {Vp6SwfAlphaVideoPacket} from "./vp6-swf-alpha-video-packet";
import {Vp6SwfVideoPacket} from "./vp6-swf-video-packet";

export interface VideoFrame extends SwfTagBase {
  type: SwfTagType.VideoFrame;
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
    "stream-id": number;
    "frame-num": number;
    "video-data": H263VideoPacket
      | ScreenVideoPacket
      | Screen2VideoPacket
      | Vp6SwfVideoPacket
      | Vp6SwfAlphaVideoPacket
      | Screen2VideoPacket;
  }

  export const type: DocumentType<VideoFrame> = new DocumentType<VideoFrame>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.VideoFrame})},
      streamId: {type: new Int32Type()},
      frameNum: {type: new Int32Type()},
      videoData: {type: null as any},
    },
    rename: CaseStyle.KebabCase,
  });
}
