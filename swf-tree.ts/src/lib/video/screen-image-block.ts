import { $Bytes } from "kryo/builtins/bytes";
import { CaseStyle } from "kryo/case-style";
import { DocumentIoType, DocumentType } from "kryo/types/document";

export interface ScreenImageBlock {
  data?: Uint8Array;
}

export const $ScreenImageBlock: DocumentIoType<ScreenImageBlock> = new DocumentType<ScreenImageBlock>({
  properties: {
    data: {type: $Bytes, optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
