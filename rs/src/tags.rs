use ::serde::{Deserialize, Serialize};

use crate::basic_types::{ColorTransformWithAlpha, LanguageCode, Matrix, NamedId, Rect, SRgb8, StraightSRgba8};
use crate::button::ButtonRecord;
use crate::button::{ButtonCondAction, ButtonSound};
use crate::float_is::Is;
use crate::helpers::{buffer_to_hex, hex_to_buffer};
use crate::shape::MorphShape;
use crate::shape::{ClipAction, Glyph, Shape};
use crate::sound::{AudioCodingFormat, SoundInfo, SoundRate, SoundSize, SoundType};
use crate::text::{
  CsmTableHint, EmSquareSize, FontAlignmentZone, FontLayout, GridFitting, TextAlignment, TextRecord, TextRenderer,
};
use crate::ImageType;
use crate::Tag;
use crate::{BlendMode, ColorTransform};
use crate::{Filter, VideoCodec, VideoDeblocking};

#[derive(Copy, Clone, Debug, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct CsmTextSettings {
  pub text_id: u16,
  pub renderer: TextRenderer,
  pub fitting: GridFitting,
  pub thickness: f32,
  pub sharpness: f32,
}

impl ::std::cmp::PartialEq for CsmTextSettings {
  fn eq(&self, other: &Self) -> bool {
    self.text_id == other.text_id
      && self.renderer == other.renderer
      && self.fitting == other.fitting
      && self.thickness.is(&other.thickness)
      && self.sharpness.is(&other.sharpness)
  }

  fn ne(&self, other: &Self) -> bool {
    !self.eq(other)
  }
}

impl ::std::cmp::Eq for CsmTextSettings {}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineBinaryData {
  pub id: u16,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineBitmap {
  pub id: u16,
  pub width: u16,
  pub height: u16,
  pub media_type: ImageType,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineButton {
  pub id: u16,
  pub track_as_menu: bool,
  pub characters: Vec<ButtonRecord>,
  pub actions: Vec<ButtonCondAction>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineButtonColorTransform {
  pub button_id: u16,
  pub transform: ColorTransform,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineButtonSound {
  pub button_id: u16,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub over_up_to_idle: Option<ButtonSound>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub idle_to_over_up: Option<ButtonSound>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub over_up_to_over_down: Option<ButtonSound>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub over_down_to_over_up: Option<ButtonSound>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineCffFont {
  pub id: u16,
  pub font_name: String,
  pub is_italic: bool,
  pub is_bold: bool,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineDynamicText {
  pub id: u16,
  pub bounds: Rect,
  pub word_wrap: bool,
  pub multiline: bool,
  pub password: bool,
  pub readonly: bool,
  pub auto_size: bool,
  pub no_select: bool,
  pub border: bool,
  pub was_static: bool,
  pub html: bool,
  pub use_glyph_font: bool,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub font_id: Option<u16>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub font_class: Option<String>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub font_size: Option<u16>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub color: Option<StraightSRgba8>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub max_length: Option<usize>,
  pub align: TextAlignment,
  pub margin_left: u16,
  pub margin_right: u16,
  pub indent: u16,
  pub leading: i16,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub variable_name: Option<String>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub text: Option<String>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineFont {
  pub id: u16,
  pub font_name: String,
  pub is_bold: bool,
  pub is_italic: bool,
  pub is_ansi: bool,
  pub is_small: bool,
  pub is_shift_jis: bool,
  pub em_square_size: EmSquareSize,
  pub language: LanguageCode,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub glyphs: Option<Vec<Glyph>>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub code_units: Option<Vec<u16>>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub layout: Option<FontLayout>,
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineFontAlignZones {
  pub font_id: u16,
  pub csm_table_hint: CsmTableHint,
  pub zones: Vec<FontAlignmentZone>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineFontInfo {
  pub font_id: u16,
  pub font_name: String,
  pub is_bold: bool,
  pub is_italic: bool,
  pub is_ansi: bool,
  pub is_shift_jis: bool,
  pub is_small: bool,
  pub language: LanguageCode,
  pub code_units: Vec<u16>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineFontName {
  pub font_id: u16,
  pub name: String,
  pub copyright: String,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineGlyphFont {
  pub id: u16,
  pub glyphs: Vec<Glyph>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineJpegTables {
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineMorphShape {
  pub id: u16,
  pub bounds: Rect,
  pub morph_bounds: Rect,
  // TODO: Combine edgeBounds and morphEdgeBounds in something like MorphRect
  #[serde(skip_serializing_if = "Option::is_none")]
  pub edge_bounds: Option<Rect>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub morph_edge_bounds: Option<Rect>,
  pub has_non_scaling_strokes: bool,
  pub has_scaling_strokes: bool,
  pub shape: MorphShape,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineScalingGrid {
  pub character_id: u16,
  pub splitter: Rect,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineSceneAndFrameLabelData {
  pub scenes: Vec<Scene>,
  pub labels: Vec<Label>,
}

// TODO(demurgos): Move to a different file since it is not a tag
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct Scene {
  pub offset: u32,
  pub name: String,
}

// TODO(demurgos): Move to a different file since it is not a tag
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct Label {
  pub frame: u32,
  pub name: String,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineShape {
  pub id: u16,
  pub bounds: Rect,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub edge_bounds: Option<Rect>,
  pub has_fill_winding: bool,
  pub has_non_scaling_strokes: bool,
  pub has_scaling_strokes: bool,
  pub shape: Shape,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineSound {
  pub id: u16,
  pub sound_type: SoundType,
  pub sound_size: SoundSize,
  pub sound_rate: SoundRate,
  pub format: AudioCodingFormat,
  pub sample_count: u32,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineSprite {
  pub id: u16,
  pub frame_count: usize,
  pub tags: Vec<Tag>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineText {
  pub id: u16,
  pub bounds: Rect,
  pub matrix: Matrix,
  pub records: Vec<TextRecord>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DefineVideoStream {
  pub id: u16,
  pub frame_count: usize,
  pub width: u16,
  pub height: u16,
  pub use_smoothing: bool,
  pub deblocking: VideoDeblocking,
  pub codec: VideoCodec,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DoAbc {
  pub flags: u32,
  pub name: String,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DoAction {
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub actions: Vec<u8>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct DoInitAction {
  pub sprite_id: u16,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub actions: Vec<u8>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct EnableDebugger {
  pub password: String,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct ExportAssets {
  pub assets: Vec<NamedId>,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct FileAttributes {
  pub use_network: bool,
  pub use_relative_urls: bool,
  pub no_cross_domain_caching: bool,
  pub use_as3: bool,
  pub has_metadata: bool,
  pub use_gpu: bool,
  pub use_direct_blit: bool,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct FrameLabel {
  pub name: String,
  pub is_anchor: bool,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct ImportAssets {
  pub url: String,
  pub assets: Vec<NamedId>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct Metadata {
  pub metadata: String,
}

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct PlaceObject {
  /// Corresponds to `is_move` in the SWF spec.
  pub is_update: bool,
  pub depth: u16,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub character_id: Option<u16>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub class_name: Option<String>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub matrix: Option<Matrix>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub color_transform: Option<ColorTransformWithAlpha>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub ratio: Option<u16>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub name: Option<String>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub clip_depth: Option<u16>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub filters: Option<Vec<Filter>>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub blend_mode: Option<BlendMode>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub bitmap_cache: Option<bool>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub visible: Option<bool>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub background_color: Option<StraightSRgba8>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub clip_actions: Option<Vec<ClipAction>>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct Protect {
  pub password: String,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct RemoveObject {
  #[serde(skip_serializing_if = "Option::is_none")]
  pub character_id: Option<u16>,
  pub depth: u16,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct ScriptLimits {
  pub max_recursion_depth: u16,
  pub script_timeout: u16,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct SetBackgroundColor {
  /// Color of the display background
  pub color: SRgb8,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct SetTabIndex {
  pub depth: u16,
  pub index: u16,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct SoundStreamBlock {
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct SoundStreamHead {
  pub playback_sound_type: SoundType,
  pub playback_sound_size: SoundSize,
  pub playback_sound_rate: SoundRate,
  pub stream_sound_type: SoundType,
  pub stream_sound_size: SoundSize,
  pub stream_sound_rate: SoundRate,
  pub stream_format: AudioCodingFormat,
  pub stream_sample_count: u16,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub latency_seek: Option<i16>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct StartSound {
  pub sound_id: u16,
  pub sound_info: SoundInfo,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct StartSound2 {
  pub sound_class_name: String,
  pub sound_info: SoundInfo,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct SymbolClass {
  pub symbols: Vec<NamedId>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct Telemetry {
  // TODO(demurgos): Serialize optional buffers to hex
  // #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  #[serde(skip_serializing_if = "Option::is_none")]
  pub password: Option<Vec<u8>>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct Unknown {
  pub code: u16,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct VideoFrame {
  pub video_id: u16,
  pub frame: u16,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub packet: Vec<u8>,
}
