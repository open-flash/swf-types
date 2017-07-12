import {CaseStyle, DocumentType, Float64Type, Int32Type} from "kryo";
import {Uint32, Uint8} from "semantic-types";
import {CompressionMethod} from "./compression-method";

export interface SwfSignature {
  compressionMethod: CompressionMethod;
  swfVersion: Uint8;
  uncompressedFileLength: Uint32;
}

export namespace SwfSignature {
  export interface Json {
    compression_method: CompressionMethod.Json;
    swf_version: number;
    uncompressed_file_length: number;
  }

  export const type: DocumentType<SwfSignature> = new DocumentType<SwfSignature>({
    properties: {
      compressionMethod: {type: CompressionMethod.type},
      swfVersion: {type: new Int32Type()},
      uncompressedFileLength: {type: new Float64Type()},
    },
    rename: CaseStyle.SnakeCase,
  });
}
