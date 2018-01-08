import { ArrayType, CaseStyle, DocumentType, IntegerType } from "kryo";
import { Uint16, Uint8 } from "semantic-types";
import { ScreenImageBlock } from "./screen-image-block";
import { Screen2ImageBlock } from "./screen2-image-block";

export interface Screen2VideoPacket {
  imageWidth: Uint16;
  imageHeight: Uint16;
  blockWidth: Uint8;
  blockHeight: Uint8;
  paletteInfo?: ScreenImageBlock;
  blocks: Screen2ImageBlock[];
  iFrameImage?: Screen2ImageBlock[];
}

export namespace Screen2VideoPacket {
  export interface Json {
    image_width: number;
    image_height: number;
    block_width: number;
    block_height: number;
    palette_info: ScreenImageBlock.Json;
    blocks: Screen2ImageBlock.Json[];
    i_frame_image: Screen2ImageBlock.Json[];
  }

  export const type: DocumentType<Screen2VideoPacket> = new DocumentType<Screen2VideoPacket>({
    properties: {
      imageWidth: {type: new IntegerType()},
      imageHeight: {type: new IntegerType()},
      blockWidth: {type: new IntegerType()},
      blockHeight: {type: new IntegerType()},
      paletteInfo: {type: ScreenImageBlock.type, optional: true},
      blocks: {type: new ArrayType({itemType: Screen2ImageBlock.type, maxLength: Infinity})},
      iFrameImage: {type: new ArrayType({itemType: Screen2ImageBlock.type, maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
