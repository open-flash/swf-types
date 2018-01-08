import { CaseStyle, DocumentType, LiteralType, Ucs2StringType } from "kryo";
import { _Tag } from "../tags/_tag";
import { TagType } from "../tags/_type";

export interface SoundStreamBlock extends _Tag {
  type: TagType.SoundStreamBlock;
  streamSoundData: Buffer;
}

export namespace SoundStreamBlock {
  export interface Json {
    type: "sound-stream-block";
    stream_sound_data: string;
  }

  export const type: DocumentType<SoundStreamBlock> = new DocumentType<SoundStreamBlock>({
    properties: {
      type: {type: new LiteralType({type: TagType.type, value: TagType.SoundStreamBlock})},
      streamSoundData: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
