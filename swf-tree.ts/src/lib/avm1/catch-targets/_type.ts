import {CaseStyle, SimpleEnumType} from "kryo";

export enum CatchTargetType {
  Register,
  Variable,
}

export namespace CatchTargetType {
  export type Json = "register" | "variable";

  export const type: SimpleEnumType<CatchTargetType> = new SimpleEnumType<CatchTargetType>({
    enum: CatchTargetType,
    rename: CaseStyle.KebabCase,
  });
}
