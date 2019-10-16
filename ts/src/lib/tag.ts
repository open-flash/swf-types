import { TaggedUnionType } from "kryo/types/tagged-union";
import * as tags from "./tags/index";

export type Tag =
  tags.CsmTextSettings
  | tags.DefineBinaryData
  | tags.DefineBitmap
  | tags.DefineButton
  | tags.DefineButtonColorTransform
  | tags.DefineButtonSound
  | tags.DefineCffFont
  | tags.DefineDynamicText
  | tags.DefineFont
  | tags.DefineFontAlignZones
  | tags.DefineFontInfo
  | tags.DefineFontName
  | tags.DefineGlyphFont
  | tags.DefineJpegTables
  | tags.DefineMorphShape
  | tags.DefineSceneAndFrameLabelData
  | tags.DefineShape
  | tags.DefineSound
  | tags.DefineSprite
  | tags.DefineText
  | tags.DoAbc
  | tags.DoAction
  | tags.DoInitAction
  | tags.EnableDebugger
  | tags.ExportAssets
  | tags.FileAttributes
  | tags.FrameLabel
  | tags.ImportAssets
  | tags.Metadata
  | tags.PlaceObject
  | tags.Protect
  | tags.RemoveObject
  | tags.ScriptLimits
  | tags.SetBackgroundColor
  | tags.ShowFrame
  | tags.SoundStreamBlock
  | tags.SoundStreamHead
  | tags.StartSound
  | tags.StartSound2
  | tags.SymbolClass
  | tags.Telemetry
  | tags.Unknown;

export const $Tag: TaggedUnionType<Tag> = new TaggedUnionType<Tag>(() => ({
  variants: [
    tags.$CsmTextSettings,
    tags.$DefineBinaryData,
    tags.$DefineBitmap,
    tags.$DefineButton,
    tags.$DefineButtonColorTransform,
    tags.$DefineButtonSound,
    tags.$DefineCffFont,
    tags.$DefineDynamicText,
    tags.$DefineFont,
    tags.$DefineFontAlignZones,
    tags.$DefineFontInfo,
    tags.$DefineFontName,
    tags.$DefineGlyphFont,
    tags.$DefineJpegTables,
    tags.$DefineMorphShape,
    tags.$DefineSceneAndFrameLabelData,
    tags.$DefineShape,
    tags.$DefineSound,
    tags.$DefineSprite,
    tags.$DefineText,
    tags.$DoAbc,
    tags.$DoAction,
    tags.$DoInitAction,
    tags.$EnableDebugger,
    tags.$ExportAssets,
    tags.$FileAttributes,
    tags.$FrameLabel,
    tags.$ImportAssets,
    tags.$Metadata,
    tags.$PlaceObject,
    tags.$Protect,
    tags.$RemoveObject,
    tags.$ScriptLimits,
    tags.$SetBackgroundColor,
    tags.$ShowFrame,
    tags.$SoundStreamBlock,
    tags.$SoundStreamHead,
    tags.$StartSound,
    tags.$StartSound2,
    tags.$SymbolClass,
    tags.$Telemetry,
    tags.$Unknown,
  ],
  tag: "type",
}));
