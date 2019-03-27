import { $Boolean } from "kryo/builtins/boolean";
import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { LiteralType } from "kryo/types/literal";
import { Uint16 } from "semantic-types";
import { _Tag } from "../tags/_tag";
import { $TagType, TagType } from "../tags/_type";
import { $VideoCodec, VideoCodec } from "./video-codec";
import { $VideoDeblocking, VideoDeblocking } from "./video-deblocking";

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

export const $DefineVideoStream: DocumentIoType<DefineVideoStream> = new DocumentType<DefineVideoStream>({
  properties: {
    type: {type: new LiteralType({type: $TagType, value: TagType.DefineVideoStream as TagType.DefineVideoStream})},
    characterId: {type: $Uint16},
    frameCount: {type: $Uint16},
    width: {type: $Uint16},
    height: {type: $Uint16},
    deblocking: {type: $VideoDeblocking},
    useVideoSmoothing: {type: $Boolean},
    codec: {type: $VideoCodec},
  },
  changeCase: CaseStyle.SnakeCase,
});
