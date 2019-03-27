import { $Uint16 } from "kryo/builtins/uint16";
import { $Uint8 } from "kryo/builtins/uint8";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16, Uint8 } from "semantic-types";
import { Ufixed8P8 } from "./fixed-point/ufixed8p8";
import { $Rect, Rect } from "./rect";
import { $SwfSignature } from "./swf-signature";

export interface Header {
  swfVersion: Uint8;
  frameSize: Rect;
  frameRate: Ufixed8P8;
  frameCount: Uint16;
}

export const $Header: DocumentIoType<Header> = new DocumentType<Header>(() => ({
  properties: {
    swfVersion: {type: $Uint8},
    frameSize: {type: $Rect},
    frameRate: {type: Ufixed8P8},
    frameCount: {type: $Uint16},
  },
  changeCase: $SwfSignature.changeCase,
}));
