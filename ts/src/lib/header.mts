import { $Uint8,$Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8, Uint16 } from "semantic-types";

import { Ufixed8P8 } from "./fixed-point/ufixed8p8.mjs";
import { $Rect, Rect } from "./rect.mjs";
import { $SwfSignature } from "./swf-signature.mjs";

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
