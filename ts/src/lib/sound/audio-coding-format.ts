import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

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

export const $AudioCodingFormat: TsEnumType<AudioCodingFormat> = new TsEnumType<AudioCodingFormat>({
  enum: AudioCodingFormat,
  changeCase: CaseStyle.PascalCase,
});
