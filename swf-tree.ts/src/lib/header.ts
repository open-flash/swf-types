import { $Uint16 } from "kryo/builtins/uint16";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16 } from "semantic-types";
import { Ufixed8P8 } from "./fixed-point/ufixed8p8";
import { $Rect, Rect } from "./rect";
import { $SwfSignature, SwfSignature } from "./swf-signature";

export interface Header extends SwfSignature {
  frameSize: Rect;
  frameRate: Ufixed8P8;
  frameCount: Uint16;
}

export const $Header: DocumentIoType<Header> = new DocumentType<Header>(() => ({
  properties: {
    ...$SwfSignature.properties,
    frameSize: {type: $Rect},
    frameRate: {type: Ufixed8P8},
    frameCount: {type: $Uint16},
  },
  changeCase: $SwfSignature.changeCase,
}));
