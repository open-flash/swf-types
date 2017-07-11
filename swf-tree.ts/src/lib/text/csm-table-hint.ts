import {CaseStyle, SimpleEnumType} from "kryo";

export enum CsmTableHint {
  Thin,
  Medium,
  Thick,
}

export namespace CsmTableHint {
  export type Json =
    "thin"
    | "medium"
    | "thick";

  export const type: SimpleEnumType<CsmTableHint> = new SimpleEnumType<CsmTableHint>({
    enum: CsmTableHint,
    rename: CaseStyle.KebabCase,
  });
}
