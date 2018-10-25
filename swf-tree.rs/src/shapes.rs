use crate::helpers::{buffer_to_hex, hex_to_buffer};
use super::fill_styles;
use super::join_styles;
use super::shape_records;

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
pub struct Glyph {
  pub records: Vec<ShapeRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Shape {
  pub fill_styles: Vec<FillStyle>,
  pub line_styles: Vec<LineStyle>,
  pub records: Vec<ShapeRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum ShapeRecord {
  CurvedEdge(shape_records::CurvedEdge),
  StraightEdge(shape_records::StraightEdge),
  StyleChange(shape_records::StyleChange),
}
