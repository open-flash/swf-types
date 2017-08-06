use avm1;
use basic_types::{ColorTransformWithAlpha, LanguageCode, Matrix, NamedId, Rect, SRgb8, StraightSRgba8};
use helpers::{buffer_to_hex, hex_to_buffer};
use ordered_float::OrderedFloat;
use shapes::{ClipAction, Glyph, Shape};
use movie::Tag;
use text::{CsmTableHint, FontAlignmentZone, FontLayout, GridFitting, TextAlignment, TextRecord, TextRenderer};
use BlendMode;
use Filter;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CsmTextSettings {
  pub text_id: u16,
  pub renderer: TextRenderer,
  pub fitting: GridFitting,
  pub thickness: OrderedFloat<f32>,
  pub sharpness: OrderedFloat<f32>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineBinaryData {
  pub id: u16,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineBitmap {
  pub id: u16,
  pub width: u16,
  pub height: u16,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineCffFont {
  pub id: u16,
  pub font_name: String,
  pub is_italic: bool,
  pub is_bold: bool,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
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
  #[serde(skip_serializing_if = "Option::is_none")]
  pub align: Option<TextAlignment>,
  pub margin_left: u16,
  pub margin_right: u16,
  pub indent: u16,
  pub leading: i16,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub variable_name: Option<String>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub text: Option<String>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineFont {
  pub id: u16,
  pub font_name: String,
  pub is_small: bool,
  pub is_shift_jis: bool,
  pub is_ansi: bool,
  pub is_italic: bool,
  pub is_bold: bool,
  pub language: LanguageCode,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub glyphs: Option<Vec<Glyph>>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub code_units: Option<Vec<u16>>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub layout: Option<FontLayout>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineFontAlignZones {
  pub font_id: u16,
  pub csm_table_hint: CsmTableHint,
  pub zones: Vec<FontAlignmentZone>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineFontInfo {
  pub font_id: u16,
  pub font_name: String,
  pub is_small: bool,
  pub is_shift_jis: bool,
  pub is_ansi: bool,
  pub is_italic: bool,
  pub is_bold: bool,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub language: Option<LanguageCode>,
  pub code_units: Vec<u16>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineFontName {
  pub font_id: u16,
  pub name: String,
  pub copyright: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineJpeg {
  pub id: u16,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub image: Vec<u8>,
  // TODO(demurgos): Serialize optional buffers to hex
  // #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  #[serde(skip_serializing_if = "Option::is_none")]
  pub alpha: Option<Vec<u8>>,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub deblocking: Option<u16>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefinePartialFont {
  pub id: u16,
  pub glyphs: Vec<Glyph>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefinePartialJpeg {
  pub id: u16,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineSceneAndFrameLabelData {
  pub scenes: Vec<Scene>,
  pub labels: Vec<Label>,
}

// TODO(demurgos): Move to a different file since it is not a tag
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Scene {
  pub offset: u32,
  pub name: String,
}

// TODO(demurgos): Move to a different file since it is not a tag
#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Label {
  pub frame: u32,
  pub name: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
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

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineSprite {
  pub id: u16,
  pub frame_count: usize,
  pub tags: Vec<Tag>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineText {
  pub id: u16,
  pub bounds: Rect,
  pub matrix: Matrix,
  pub records: Vec<TextRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DoAction {
  pub actions: Vec<avm1::Action>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DoInitAction {
  pub sprite_id: u16,
  pub actions: Vec<avm1::Action>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct EnableDebugger {
  pub password: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ExportAssets {
  pub assets: Vec<NamedId>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct FileAttributes {
  pub use_direct_blit: bool,
  pub use_gpu: bool,
  pub has_metadata: bool,
  pub use_as3: bool,
  pub no_cross_domain_caching: bool,
  pub use_relative_urls: bool,
  pub use_network: bool,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ImportAssets {
  pub url: String,
  pub assets: Vec<NamedId>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct JpegTables {
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Metadata {
  pub metadata: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct PlaceObject {
  pub is_move: bool,
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

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct RemoveObject {
  #[serde(skip_serializing_if = "Option::is_none")]
  pub character_id: Option<u16>,
  pub depth: u16,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct SetBackgroundColor {
  /// Color of the display background
  pub color: SRgb8,
}

// pub type ShowFrame = ();

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Telemetry {
  // TODO(demurgos): Serialize optional buffers to hex
  // #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  #[serde(skip_serializing_if = "Option::is_none")]
  pub password: Option<Vec<u8>>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Unknown {
  pub code: u16,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub data: Vec<u8>,
}
