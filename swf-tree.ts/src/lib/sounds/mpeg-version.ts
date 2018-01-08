import { CaseStyle, SimpleEnumType } from "kryo";

export enum MpegVersion {
  V1,
  V2,
  V2_5,
}

export namespace MpegVersion {
  export type Json =
    "1"
    | "2"
    | "2.5";

  export const type: SimpleEnumType<MpegVersion> = new SimpleEnumType<MpegVersion>({
    enum: MpegVersion,
    rename: CaseStyle.KebabCase,
  });
}
