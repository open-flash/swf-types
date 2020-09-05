import { CaseStyle } from "kryo";
import { $Uint8,$Uint32 } from "kryo/lib/integer.js";
import { RecordIoType, RecordType } from "kryo/lib/record.js";
import { Uint8,Uint32 } from "semantic-types";

import { $CompressionMethod, CompressionMethod } from "./compression-method.js";

export interface SwfSignature {
  compressionMethod: CompressionMethod;
  swfVersion: Uint8;
  uncompressedFileLength: Uint32;
}

export const $SwfSignature: RecordIoType<SwfSignature> = new RecordType<SwfSignature>({
  properties: {
    compressionMethod: {type: $CompressionMethod},
    swfVersion: {type: $Uint8},
    uncompressedFileLength: {type: $Uint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
