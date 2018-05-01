import { TaggedUnionType } from "kryo/types/tagged-union";
import * as tags from "./tags/index";

export type Tag =
  tags.CsmTextSettings
  | tags.DefineBinaryData
  | tags.DefineBitmap
  | tags.DefineButton
  | tags.DefineCffFont
  | tags.DefineDynamicText
  | tags.DefineFont
  | tags.DefineFontAlignZones
  | tags.DefineFontInfo
  | tags.DefineFontName
  | tags.DefineJpegTables
  | tags.DefineMorphShape
  | tags.DefinePartialFont
  | tags.DefineSceneAndFrameLabelData
  | tags.DefineShape
  | tags.DefineSprite
  | tags.DefineText
  | tags.DoAction
  | tags.DoInitAction
  | tags.EnableDebugger
  | tags.ExportAssets
  | tags.FileAttributes
  | tags.FrameLabel
  | tags.ImportAssets
  | tags.Metadata
  | tags.PlaceObject
  | tags.RemoveObject
  | tags.SetBackgroundColor
  | tags.ShowFrame
  | tags.SoundStreamBlock
  | tags.SoundStreamHead
  | tags.Telemetry
  | tags.Unknown;

export const $Tag: TaggedUnionType<Tag> = new TaggedUnionType<Tag>(() => ({
  variants: [
    tags.$CsmTextSettings,
    tags.$DefineBinaryData,
    tags.$DefineBitmap,
    tags.$DefineButton,
    tags.$DefineCffFont,
    tags.$DefineDynamicText,
    tags.$DefineFont,
    tags.$DefineFontAlignZones,
    tags.$DefineFontInfo,
    tags.$DefineFontName,
    tags.$DefineJpegTables,
    tags.$DefineMorphShape,
    tags.$DefinePartialFont,
    tags.$DefineSceneAndFrameLabelData,
    tags.$DefineShape,
    tags.$DefineSprite,
    tags.$DefineText,
    tags.$DoAction,
    tags.$DoInitAction,
    tags.$EnableDebugger,
    tags.$ExportAssets,
    tags.$FileAttributes,
    tags.$FrameLabel,
    tags.$ImportAssets,
    tags.$Metadata,
    tags.$PlaceObject,
    tags.$RemoveObject,
    tags.$SetBackgroundColor,
    tags.$ShowFrame,
    tags.$SoundStreamBlock,
    tags.$SoundStreamHead,
    tags.$Telemetry,
    tags.$Unknown,
  ],
  tag: "type",
}));
