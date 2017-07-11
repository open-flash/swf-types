import {CaseStyle, SimpleEnumType} from "kryo";

export enum SoundType {
  Mono,
  Stereo,
}

export namespace SoundType {
  export type Json =
    "mono"
    | "stereo";

  export const type: SimpleEnumType<SoundType> = new SimpleEnumType<SoundType>({
    enum: SoundType,
    rename: CaseStyle.KebabCase,
  });
}
