import {ArrayType, CaseStyle, DocumentType, Int32Type} from "kryo";
import {Uint16, Uint8} from "semantic-types";
import {ScreenImageBlock} from "./screen-image-block";
import {Screen2ImageBlock} from "./screen2-image-block";

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
    "image-width": number;
    "image-height": number;
    "block-width": number;
    "block-height": number;
    "palette-info": ScreenImageBlock.Json;
    "blocks": Screen2ImageBlock.Json[];
    "i-frame-image": Screen2ImageBlock.Json[];
  }

  export const type: DocumentType<Screen2VideoPacket> = new DocumentType<Screen2VideoPacket>({
    properties: {
      imageWidth: {type: new Int32Type()},
      imageHeight: {type: new Int32Type()},
      blockWidth: {type: new Int32Type()},
      blockHeight: {type: new Int32Type()},
      paletteInfo: {type: ScreenImageBlock.type, optional: true},
      blocks: {type: new ArrayType({itemType: Screen2ImageBlock.type, maxLength: Infinity})},
      iFrameImage: {type: new ArrayType({itemType: Screen2ImageBlock.type, maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.KebabCase,
  });
}
