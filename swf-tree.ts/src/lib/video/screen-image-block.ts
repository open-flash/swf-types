import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";

export interface ScreenImageBlock {
  data?: Uint8Array;
}

export const $ScreenImageBlock: DocumentIoType<ScreenImageBlock> = new DocumentType<ScreenImageBlock>({
  properties: {
    data: {type: new BufferType({maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
