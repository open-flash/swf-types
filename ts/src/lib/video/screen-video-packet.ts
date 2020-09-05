import { $Uint16 } from "kryo/lib/integer.js";
import { CaseStyle } from "kryo";
import { ArrayType } from "kryo/lib/array.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint16, Uint8 } from "semantic-types";
import { $ScreenImageBlock, ScreenImageBlock } from "./screen-image-block.js";

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
