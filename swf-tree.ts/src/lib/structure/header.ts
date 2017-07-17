import {DocumentType, Int32Type} from "kryo";
import {Uint16} from "semantic-types";
import {Ufixed8P8} from "../fixed-point/ufixed8p8";
import {Rect} from "../rect";
import {SwfSignature} from "./swf-signature";

export interface Header extends SwfSignature {
  frameSize: Rect;
  frameRate: Ufixed8P8;
  frameCount: Uint16;
}

export namespace Header {
  export interface Json extends SwfSignature.Json {
    frame_size: Rect.Json;
    frame_rate: number;
    frame_count: number;
  }

  export const type: DocumentType<Header> = new DocumentType<Header>({
    properties: {
      ...SwfSignature.type.properties,
      frameSize: {type: Rect.type},
      frameRate: {type: Ufixed8P8.type},
      frameCount: {type: new Int32Type()},
    },
    rename: SwfSignature.type.rename,
  });
}