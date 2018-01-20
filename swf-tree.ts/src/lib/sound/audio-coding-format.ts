import { CaseStyle, SimpleEnumType } from "kryo";

export enum AudioCodingFormat {
  UncompressedNativeEndian,
  Adpcm,
  Mp3,
  UncompressedLittleEndian,
  Nellymoser16,
  Nellymoser8,
  Nellymoser,
  Speex,
}

export namespace AudioCodingFormat {
  export type Json =
    "uncompressed-native-endian"
    | "adcpm"
    | "mp3"
    | "uncompressed-little-endian"
    | "nellymoser16"
    | "nellymoser8"
    | "nellymoser"
    | "speex";

  export const type: SimpleEnumType<AudioCodingFormat> = new SimpleEnumType<AudioCodingFormat>({
    enum: AudioCodingFormat,
    rename: CaseStyle.KebabCase,
  });
}
