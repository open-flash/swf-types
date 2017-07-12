import {BufferType, CaseStyle, DocumentType} from "kryo";
import {Screen2ImageBlockDiffPosition} from "./screen2-image-block-diff-position";
import {Screen2ImageBlockPrimePosition} from "./screen2-image-block-prime-position";
import {Screen2ImageFormat} from "./screen2-image-format";

export interface Screen2ImageBlock {
  format: Screen2ImageFormat;
  header?: Screen2ImageBlockDiffPosition | Screen2ImageBlockPrimePosition;
  data?: Uint8Array;
}

export namespace Screen2ImageBlock {
  export interface Json {
    format: Screen2ImageFormat.Json;
    header?: Screen2ImageBlockDiffPosition.Json | Screen2ImageBlockPrimePosition.Json;
    data?: string;
  }

  export const type: DocumentType<Screen2ImageBlock> = new DocumentType<Screen2ImageBlock>({
    properties: {
      format: {type: Screen2ImageFormat.type},
      header: {type: undefined as any, optional: true},
      data: {type: new BufferType({maxLength: Infinity}), optional: true},
    },
    rename: CaseStyle.SnakeCase,
  });
}
