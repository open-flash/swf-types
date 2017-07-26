use avm1;
use basic_types::{ColorTransformWithAlpha, LanguageCode, Matrix, NamedId, Rect, SRgb8, StraightSRgba8};
use shapes::{ClipAction, Glyph, Shape};
use structure::Tag;
use text::FontLayout;
use BlendMode;
use Filter;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Scene {
  pub offset: u32,
  pub name: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Label {
  pub frame: u32,
  pub name: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineFont3 {
  pub id: u16,
  pub font_name: String,
  pub is_small: bool,
  pub is_shift_jis: bool,
  pub is_ansi: bool,
  pub is_italic: bool,
  pub is_bold: bool,
  pub language: LanguageCode,
  pub glyphs: Vec<Glyph>,
  pub code_units: Vec<u16>,
  pub layout: Option<FontLayout>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineSceneAndFrameLabelData {
  pub scenes: Vec<Scene>,
  pub labels: Vec<Label>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct DefineShape {
  pub id: u16,
  pub bounds: Rect,
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
pub struct DoAction {
  pub actions: Vec<avm1::Action>,
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
pub struct PlaceObject {
  pub depth: u16,
  pub character_id: Option<u16>,
  pub class_name: Option<String>,
  pub matrix: Option<Matrix>,
  pub color_transform: Option<ColorTransformWithAlpha>,
  pub ratio: Option<u16>,
  pub name: Option<String>,
  pub clip_depth: Option<u16>,
  pub filters: Vec<Filter>,
  pub blend_mode: Option<BlendMode>,
  pub bitmap_cache: Option<bool>,
  pub visible: Option<bool>,
  pub background_color: Option<StraightSRgba8>,
  pub clip_actions: Vec<ClipAction>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Metadata {
  pub metadata: String,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct SetBackgroundColor {
  /// Color of the display background
  pub color: SRgb8,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Unknown {
  pub code: u16,
  pub data: Vec<u8>,
}
