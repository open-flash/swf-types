import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8,Uint16 } from "semantic-types";

import { $ScreenImageBlock, ScreenImageBlock } from "./screen-image-block.mjs";
import { $Screen2ImageBlock, Screen2ImageBlock } from "./screen2-image-block.mjs";

export interface Screen2VideoPacket {
  imageWidth: Uint16;
  imageHeight: Uint16;
  blockWidth: Uint8;
  blockHeight: Uint8;
  paletteInfo?: ScreenImageBlock;
  blocks: Screen2ImageBlock[];
  iFrameImage?: Screen2ImageBlock[];
}

export const $Screen2VideoPacket: RecordIoType<Screen2VideoPacket> = new RecordType<Screen2VideoPacket>({
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
