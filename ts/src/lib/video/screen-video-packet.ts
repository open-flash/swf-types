import { $Uint16 } from "kryo/builtins/uint16";
import { CaseStyle } from "kryo/case-style";
import { ArrayType } from "kryo/types/array";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint16, Uint8 } from "semantic-types";
import { $ScreenImageBlock, ScreenImageBlock } from "./screen-image-block";

export interface ScreenVideoPacket {
  imageWidth: Uint16;
  imageHeight: Uint16;
  blockWidth: Uint8;
  blockHeight: Uint8;
  blocks: ScreenImageBlock[];
}

export const $ScreenVideoPacket: DocumentIoType<ScreenVideoPacket> = new DocumentType<ScreenVideoPacket>({
  properties: {
    imageWidth: {type: $Uint16},
    imageHeight: {type: $Uint16},
    blockWidth: {type: $Uint16},
    blockHeight: {type: $Uint16},
    blocks: {type: new ArrayType({itemType: $ScreenImageBlock, maxLength: Infinity})},
  },
  changeCase: CaseStyle.SnakeCase,
});
