use crate::fill_styles;
use crate::helpers::{buffer_to_hex, hex_to_buffer};
use crate::join_styles;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum CapStyle {
  None,
  Round,
  Square,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ClipAction {
  pub events: ClipEventFlags,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub key_code: Option<u8>,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub actions: Vec<u8>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ClipEventFlags {
  pub key_up: bool,
  pub key_down: bool,
  pub mouse_up: bool,
  pub mouse_down: bool,
  pub mouse_move: bool,
  pub unload: bool,
  pub enter_frame: bool,
  pub load: bool,
  pub drag_over: bool,
  pub roll_out: bool,
  pub roll_over: bool,
  pub release_outside: bool,
  pub release: bool,
  pub press: bool,
  pub initialize: bool,
  pub data: bool,
  pub construct: bool,
  pub key_press: bool,
  pub drag_out: bool,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum FillStyle {
  Bitmap(fill_styles::Bitmap),
  FocalGradient(fill_styles::FocalGradient),
  LinearGradient(fill_styles::LinearGradient),
  RadialGradient(fill_styles::RadialGradient),
  Solid(fill_styles::Solid),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum MorphFillStyle {
  Bitmap(fill_styles::MorphBitmap),
  FocalGradient(fill_styles::MorphFocalGradient),
  LinearGradient(fill_styles::MorphLinearGradient),
  RadialGradient(fill_styles::MorphRadialGradient),
  Solid(fill_styles::MorphSolid),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum JoinStyle {
  Bevel,
  Miter(join_styles::Miter),
  Round,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct LineStyle {
  pub width: u16,
  pub start_cap: CapStyle,
  pub end_cap: CapStyle,
  pub join: JoinStyle,
  pub no_h_scale: bool,
  pub no_v_scale: bool,
  pub no_close: bool,
  pub pixel_hinting: bool,
  pub fill: FillStyle,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct MorphLineStyle {
  pub width: u16,
  pub morph_width: u16,
  pub start_cap: CapStyle,
  pub end_cap: CapStyle,
  pub join: JoinStyle,
  pub no_h_scale: bool,
  pub no_v_scale: bool,
  pub no_close: bool,
  pub pixel_hinting: bool,
  pub fill: MorphFillStyle,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Glyph {
  pub records: Vec<ShapeRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Shape {
  pub initial_styles: ShapeStyles,
  pub records: Vec<ShapeRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct MorphShape {
  pub initial_styles: MorphShapeStyles,
  pub records: Vec<MorphShapeRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum ShapeRecord {
  CurvedEdge(shape_records::CurvedEdge),
  StraightEdge(shape_records::StraightEdge),
  StyleChange(shape_records::StyleChange),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum MorphShapeRecord {
  CurvedEdge(shape_records::MorphCurvedEdge),
  StraightEdge(shape_records::MorphStraightEdge),
  StyleChange(shape_records::MorphStyleChange),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ShapeStyles {
  pub fill: Vec<FillStyle>,
  pub line: Vec<LineStyle>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct MorphShapeStyles {
  pub fill: Vec<MorphFillStyle>,
  pub line: Vec<MorphLineStyle>,
}

pub mod shape_records {
  use crate::Vector2D;
  use super::{MorphShapeStyles, ShapeStyles};

  #[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
  pub struct CurvedEdge {
    pub control_delta: Vector2D,
    pub anchor_delta: Vector2D,
  }

  #[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
  pub struct MorphCurvedEdge {
    pub control_delta: Vector2D,
    pub morph_control_delta: Vector2D,
    pub anchor_delta: Vector2D,
    pub morph_anchor_delta: Vector2D,
  }

  #[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
  pub struct StraightEdge {
    pub delta: Vector2D,
  }

  #[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
  pub struct MorphStraightEdge {
    pub delta: Vector2D,
    pub morph_delta: Vector2D,
  }

  #[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
  pub struct StyleChange {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub move_to: Option<Vector2D>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub left_fill: Option<usize>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub right_fill: Option<usize>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub line_style: Option<usize>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub new_styles: Option<ShapeStyles>,
  }

  #[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
  pub struct MorphStyleChange {
    #[serde(skip_serializing_if = "Option::is_none")]
    pub move_to: Option<Vector2D>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub morph_move_to: Option<Vector2D>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub left_fill: Option<usize>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub right_fill: Option<usize>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub line_style: Option<usize>,
    #[serde(skip_serializing_if = "Option::is_none")]
    pub new_styles: Option<MorphShapeStyles>,
  }
}
