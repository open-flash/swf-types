import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum MpegVersion {
  V1,
  V2,
  V2_5,
}

export const $MpegVersion: TsEnumType<MpegVersion> = new TsEnumType<MpegVersion>({
  enum: MpegVersion,
  changeCase: CaseStyle.PascalCase,
});
