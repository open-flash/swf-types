import { CaseStyle, DocumentType, LiteralType, Ucs2StringType } from "kryo";
import { _Tag } from "./_tag";
import { TagType } from "./_type";

export interface SoundStreamBlock extends _Tag {
  type: TagType.SoundStreamBlock;
  data: Buffer;
}

export namespace SoundStreamBlock {
  export interface Json {
    type: "sound-stream-block";
    data: string;
  }

  export const type: DocumentType<SoundStreamBlock> = new DocumentType<SoundStreamBlock>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SoundStreamBlock})},
      data: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
