import { BufferType, CaseStyle, DocumentType } from "kryo";

export interface ScreenImageBlock {
  data?: Uint8Array;
}

export namespace ScreenImageBlock {
  export interface Json {
    data?: string;
  }

  export const type: DocumentType<ScreenImageBlock> = new DocumentType<ScreenImageBlock>({
    properties: {
      data: {type: new BufferType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
