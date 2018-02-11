import { $Uint32 } from "kryo/builtins/uint32";
import { $Uint8 } from "kryo/builtins/uint8";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Uint32, Uint8 } from "semantic-types";
import { $CompressionMethod, CompressionMethod } from "./compression-method";

export interface SwfSignature {
  compressionMethod: CompressionMethod;
  swfVersion: Uint8;
  uncompressedFileLength: Uint32;
}

export const $SwfSignature: DocumentIoType<SwfSignature> = new DocumentType<SwfSignature>({
  properties: {
    compressionMethod: {type: $CompressionMethod},
    swfVersion: {type: $Uint8},
    uncompressedFileLength: {type: $Uint32},
  },
  changeCase: CaseStyle.SnakeCase,
});
