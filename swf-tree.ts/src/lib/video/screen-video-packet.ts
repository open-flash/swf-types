import {ArrayType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {ScreenImageBlock} from "./screen-image-block";
import {Uint16, Uint8} from "semantic-types";

export interface ScreenVideoPacket {
  imageWidth: Uint16;
  imageHeight: Uint16;
  blockWidth: Uint8;
  blockHeight: Uint8;
  blocks: ScreenImageBlock[];
}

export namespace ScreenVideoPacket {
  export interface Json {
    "image-width": number;
    "image-height": number;
    "block-width": number;
    "block-height": number;
    "blocks": ScreenImageBlock.Json[];
  }

  export const type: DocumentType<ScreenVideoPacket> = new DocumentType<ScreenVideoPacket>({
    properties: {
      imageWidth: {type: new Int32Type()},
      imageHeight: {type: new Int32Type()},
      blockWidth: {type: new Int32Type()},
      blockHeight: {type: new Int32Type()},
      blocks: {type: new ArrayType({itemType: ScreenImageBlock.type, maxLength: Infinity})},
    },
    rename: CaseStyle.KebabCase,
  });
}
