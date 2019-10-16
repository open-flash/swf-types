import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { $VideoCodec, VideoCodec } from "../video/video-codec";
import { $VideoDeblocking, VideoDeblocking } from "../video/video-deblocking";
import { _Tag } from "./_tag";
import { $TagType, TagType } from "./_type";

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

export const $DefineVideoStream: DocumentIoType<DefineVideoStream> = new DocumentType<DefineVideoStream>({
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
