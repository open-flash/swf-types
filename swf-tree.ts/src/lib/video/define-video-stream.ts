import {BooleanType, CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {VideoCodec} from "./video-codec";
import {VideoDeblocking} from "./video-deblocking";

export interface DefineVideoStream extends SwfTagBase {
  type: SwfTagType.DefineVideoStream;
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
    "character-id": number;
    "frame-count": number;
    "width": number;
    "height": number;
    "deblocking": VideoDeblocking.Json;
    "use-video-smoothing": boolean;
    codec: VideoCodec.Json;
  }

  export const type: DocumentType<DefineVideoStream> = new DocumentType<DefineVideoStream>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.DefineVideoStream})},
      characterId: {type: new Int32Type()},
      frameCount: {type: new Int32Type()},
      width: {type: new Int32Type()},
      height: {type: new Int32Type()},
      deblocking: {type: VideoDeblocking.type},
      useVideoSmoothing: {type: new BooleanType()},
      codec: {type: VideoCodec.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
