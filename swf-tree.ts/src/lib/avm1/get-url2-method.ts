import {CaseStyle, SimpleEnumType} from "kryo";

export enum GetUrl2Method {
  None,
  Get,
  Post,
}

export namespace GetUrl2Method {
  export type Json = "none" | "get" | "post";

  export const type: SimpleEnumType<GetUrl2Method> = new SimpleEnumType<GetUrl2Method>({
    enum: GetUrl2Method,
    rename: CaseStyle.KebabCase,
  });
}
