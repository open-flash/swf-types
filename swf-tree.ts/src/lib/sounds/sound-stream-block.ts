import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";

export interface SoundStreamBlock extends SwfTagBase {
  type: SwfTagType.SoundStreamBlock;
  streamSoundData: Buffer;
}

export namespace SoundStreamBlock {
  export interface Json {
    type: "sound-stream-block";
    stream_sound_data: string;
  }

  export const type: DocumentType<SoundStreamBlock> = new DocumentType<SoundStreamBlock>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.SoundStreamBlock})},
      streamSoundData: {type: new Ucs2StringType({maxLength: Infinity})},
    },
    rename: CaseStyle.SnakeCase,
  });
}
