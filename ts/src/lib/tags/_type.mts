import { CaseStyle } from "kryo";
import { TsEnumType } from "kryo/ts-enum";

export enum TagType {
  CharacterSet,
  CsmTextSettings,
  DebugId,
  DefineBehaviour,
  DefineBinaryData,
  DefineBitmap,
  DefineButton,
  DefineButtonColorTransform,
  DefineButtonSound,
  DefineCffFont,
  DefineCommandObject,
  DefineDynamicText,
  DefineFont,
  DefineFontAlignZones,
  DefineFontInfo,
  DefineFontName,
  DefineGlyphFont,
  DefineJpegTables,
  DefineFunction,
  DefineMorphShape,
  DefineScalingGrid,
  DefineSceneAndFrameLabelData,
  DefineShape,
  DefineSound,
  DefineSprite,
  DefineText,
  DefineTextFormat,
  DefineVideo,
  DefineVideoStream,
  DoAbc,
  DoAbcDefine,
  DoAction,
  DoInitAction,
  EnableDebugger,
  EnablePostscript,
  ExportAssets,
  ExternalFont,
  FileAttributes,
  FrameLabel,
  FreeAll,
  FreeCharacter,
  GenCommand,
  GenerateFrame,
  GenTagObjects,
  ImportAssets,
  Metadata,
  NameCharacter,
  PathsArePostscript,
  PlaceFunction,
  PlaceObject,
  ProductInfo,
  Protect,
  Raw,
  RawBody,
  RemoveObject,
  ScriptLimits,
  SetBackgroundColor,
  SetTabIndex,
  ShowFrame,
  SoundStreamBlock,
  SoundStreamHead,
  StartSound,
  StartSound2,
  StopSound,
  SymbolClass,
  SyncFrame,
  Telemetry,
  VideoFrame,
}

export const $TagType: TsEnumType<TagType> = new TsEnumType<TagType>({
  enum: TagType,
  changeCase: CaseStyle.PascalCase,
});