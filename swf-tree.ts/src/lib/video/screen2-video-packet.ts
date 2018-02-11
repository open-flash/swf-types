import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16, Uint8 } from "semantic-types";
import { $ScreenImageBlock, ScreenImageBlock } from "./screen-image-block";
import { $Screen2ImageBlock, Screen2ImageBlock } from "./screen2-image-block";

export interface Screen2VideoPacket {
  imageWidth: Uint16;
  imageHeight: Uint16;
  blockWidth: Uint8;
  blockHeight: Uint8;
  paletteInfo?: ScreenImageBlock;
  blocks: Screen2ImageBlock[];
  iFrameImage?: Screen2ImageBlock[];
}

export const $Screen2VideoPacket: DocumentIoType<Screen2VideoPacket> = new DocumentType<Screen2VideoPacket>({
  properties: {
    imageWidth: {type: $Uint16},
    imageHeight: {type: $Uint16},
    blockWidth: {type: $Uint16},
    blockHeight: {type: $Uint16},
    paletteInfo: {type: $ScreenImageBlock, optional: true},
    blocks: {type: new ArrayType({itemType: $Screen2ImageBlock, maxLength: Infinity})},
    iFrameImage: {type: new ArrayType({itemType: $Screen2ImageBlock, maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
