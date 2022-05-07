import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/array";
import { $Uint16 } from "kryo/integer";
import { RecordIoType, RecordType } from "kryo/record";
import { Uint8,Uint16 } from "semantic-types";

import { $ScreenImageBlock, ScreenImageBlock } from "./screen-image-block.mjs";

export interface ScreenVideoPacket {
  imageWidth: Uint16;
  imageHeight: Uint16;
  blockWidth: Uint8;
  blockHeight: Uint8;
  blocks: ScreenImageBlock[];
}

export const $ScreenVideoPacket: RecordIoType<ScreenVideoPacket> = new RecordType<ScreenVideoPacket>({
  properties: {
    imageWidth: {type: $Uint16},
    imageHeight: {type: $Uint16},
    blockWidth: {type: $Uint16},
    blockHeight: {type: $Uint16},
    blocks: {type: new ArrayType({itemType: $ScreenImageBlock, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
