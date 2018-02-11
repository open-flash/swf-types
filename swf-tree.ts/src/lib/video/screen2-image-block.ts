import { $Any } from "kryo/builtins/any";
import { CaseStyle } from "kryo/case-style";
import { BufferType } from "kryo/types/buffer";
import { DocumentIoType, DocumentType } from "kryo/types/document";
import { Screen2ImageBlockDiffPosition } from "./screen2-image-block-diff-position";
import { Screen2ImageBlockPrimePosition } from "./screen2-image-block-prime-position";
import { $Screen2ImageFormat, Screen2ImageFormat } from "./screen2-image-format";

export interface Screen2ImageBlock {
  format: Screen2ImageFormat;
  header?: Screen2ImageBlockDiffPosition | Screen2ImageBlockPrimePosition;
  data?: Uint8Array;
}

export const $Screen2ImageBlock: DocumentIoType<Screen2ImageBlock> = new DocumentType<Screen2ImageBlock>({
  properties: {
    format: {type: $Screen2ImageFormat},
    header: {type: $Any, optional: true},
    data: {type: new BufferType({maxLength: Infinity}), optional: true},
  },
  changeCase: CaseStyle.SnakeCase,
});
