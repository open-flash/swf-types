import {CaseStyle, DocumentType, LiteralType, Ucs2StringType} from "kryo";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {SoundInfo} from "./sound-info";

export interface StartSound2 extends SwfTagBase {
  type: SwfTagType.StartSound2;
  soundClassName: string;
  soundInfo: SoundInfo;
}

export namespace StartSound2 {
  export interface Json {
    type: "start-sound";
    "sound-class-name": string;
    "sound-info": SoundInfo.Json;
  }

  export const type: DocumentType<StartSound2> = new DocumentType<StartSound2>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.StartSound})},
      soundClassName: {type: new Ucs2StringType({maxLength: Infinity})},
      soundInfo: {type: SoundInfo.type},
    },
    rename: CaseStyle.KebabCase,
  });
}
