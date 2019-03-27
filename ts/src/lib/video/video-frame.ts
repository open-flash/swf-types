import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";
import { H263VideoPacket } from "./h263-video-packet";
import { ScreenVideoPacket } from "./screen-video-packet";
import { Screen2VideoPacket } from "./screen2-video-packet";
import { Vp6SwfAlphaVideoPacket } from "./vp6-swf-alpha-video-packet";
import { Vp6SwfVideoPacket } from "./vp6-swf-video-packet";

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

export const $VideoFrame: DocumentIoType<VideoFrame> = new DocumentType<VideoFrame>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.VideoFrame as TagType.VideoFrame})},
    streamId: {type: $Uint16},
    frameNum: {type: $Uint16},
    videoData: {type: null as any},
  },
  changeCase: CaseStyle.SnakeCase,
});
