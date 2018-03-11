import { $Any } from "kryo/builtins/any";
import { $Boolean } from "kryo/builtins/boolean";
import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { $Mp3ChannelMode, Mp3ChannelMode } from "./mp3-channel-mode";
import { $Mp3Layer, Mp3Layer } from "./mp3-layer";
import { $MpegVersion, MpegVersion } from "./mpeg-version";

export interface Mp3Frame {
  mpegVersion: MpegVersion;
  layer: Mp3Layer;
  bitrate: number; // TODO: Union
  samplingRate: number; // TODO: enum or union
  useFramePadding: boolean;
  channelMode: Mp3ChannelMode;
  isCopyrighted: boolean;
  isOriginal: boolean;
  emphasis: "none" | "50/15" | "CcitJ17";
  sampleData: Uint8Array;
}

export const $Mp3Frame: DocumentIoType<Mp3Frame> = new DocumentType<Mp3Frame>({
  properties: {
    mpegVersion: {type: $MpegVersion},
    layer: {type: $Mp3Layer},
    bitrate: {type: $Any},
    samplingRate: {type: $Any},
    useFramePadding: {type: $Boolean},
    channelMode: {type: $Mp3ChannelMode},
    isCopyrighted: {type: $Boolean},
    isOriginal: {type: $Boolean},
    emphasis: {type: $Any},
    sampleData: {type: $Bytes},
  },
  changeCase: CaseStyle.SnakeCase,
});
