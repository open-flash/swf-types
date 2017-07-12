import {CaseStyle, DocumentType, Int32Type, LiteralType} from "kryo";
import {Uint16} from "semantic-types";
import {SwfTagType} from "../swf-tag-type";
import {SwfTagBase} from "../swf-tags/_base";
import {SoundInfo} from "./sound-info";

export interface StartSound extends SwfTagBase {
  type: SwfTagType.StartSound;
  soundId: Uint16;
  soundInfo: SoundInfo;
}

export namespace StartSound {
  export interface Json {
    type: "start-sound";
    sound_id: number;
    sound_info: SoundInfo.Json;
  }

  export const type: DocumentType<StartSound> = new DocumentType<StartSound>({
    properties: {
      type: {type: new LiteralType({type: SwfTagType.type, value: SwfTagType.StartSound})},
      soundId: {type: new Int32Type()},
      soundInfo: {type: SoundInfo.type},
    },
    rename: CaseStyle.SnakeCase,
  });
}
