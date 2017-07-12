import {ArrayType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16, Uint8} from "semantic-types";
import {ScreenImageBlock} from "./screen-image-block";

export interface ScreenVideoPacket {
  imageWidth: Uint16;
  imageHeight: Uint16;
  blockWidth: Uint8;
  blockHeight: Uint8;
  blocks: ScreenImageBlock[];
}

export namespace ScreenVideoPacket {
  export interface Json {
    image_width: number;
    image_height: number;
    block_width: number;
    block_height: number;
    blocks: ScreenImageBlock.Json[];
  }

  export const type: DocumentType<ScreenVideoPacket> = new DocumentType<ScreenVideoPacket>({
    properties: {
      imageWidth: {type: new Int32Type()},
      imageHeight: {type: new Int32Type()},
      blockWidth: {type: new Int32Type()},
      blockHeight: {type: new Int32Type()},
      blocks: {type: new ArrayType({itemType: ScreenImageBlock.type, maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
