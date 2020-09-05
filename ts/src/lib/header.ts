import { $Uint16 } from "kryo/lib/integer.js";
import { $Uint8 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16, Uint8 } from "semantic-types";
import { Ufixed8P8 } from "./fixed-point/ufixed8p8.js";
import { $Rect, Rect } from "./rect.js";
import { $SwfSignature } from "./swf-signature.js";

export interface Header {
  swfVersion: Uint8;
  frameSize: Rect;
  frameRate: Ufixed8P8;
  frameCount: Uint16;
}

export const $Header: RecordIoType<Header> = new RecordType<Header>(() => ({
  properties: {
    swfVersion: {type: $Uint8},
    frameSize: {type: $Rect},
    frameRate: {type: Ufixed8P8},
    frameCount: {type: $Uint16},
  },
  changeCase: $SwfSignature.changeCase,
}));
