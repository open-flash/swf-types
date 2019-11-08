#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

use crate::fill_styles;
use crate::join_styles;
#[cfg(feature = "serde")]
use crate::serde_buffer::{buffer_to_hex, hex_to_buffer};

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "kebab-case"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum CapStyle {
  None,
  Round,
  Square,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ClipAction {
  pub events: ClipEventFlags,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub key_code: Option<u8>,
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub actions: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
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

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "kebab-case")
)]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum FillStyle {
  Bitmap(fill_styles::Bitmap),
  FocalGradient(fill_styles::FocalGradient),
  LinearGradient(fill_styles::LinearGradient),
  RadialGradient(fill_styles::RadialGradient),
  Solid(fill_styles::Solid),
}

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "kebab-case")
)]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum MorphFillStyle {
  Bitmap(fill_styles::MorphBitmap),
  FocalGradient(fill_styles::MorphFocalGradient),
  LinearGradient(fill_styles::MorphLinearGradient),
  RadialGradient(fill_styles::MorphRadialGradient),
  Solid(fill_styles::MorphSolid),
}

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "kebab-case")
)]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum JoinStyle {
  Bevel,
  Miter(join_styles::Miter),
  Round,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
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

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
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

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Glyph {
  pub records: Vec<ShapeRecord>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Shape {
  pub initial_styles: ShapeStyles,
  pub records: Vec<ShapeRecord>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphShape {
  pub initial_styles: MorphShapeStyles,
  pub records: Vec<MorphShapeRecord>,
}

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "kebab-case")
)]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum ShapeRecord {
  Edge(shape_records::Edge),
  StyleChange(shape_records::StyleChange),
}

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "kebab-case")
)]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum MorphShapeRecord {
  Edge(shape_records::MorphEdge),
  StyleChange(shape_records::MorphStyleChange),
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ShapeStyles {
  pub fill: Vec<FillStyle>,
  pub line: Vec<LineStyle>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphShapeStyles {
  pub fill: Vec<MorphFillStyle>,
  pub line: Vec<MorphLineStyle>,
}

pub mod shape_records {
  #[cfg(feature = "serde")]
  use ::serde::{Deserialize, Serialize};

  use crate::Vector2D;

  use super::{MorphShapeStyles, ShapeStyles};

  #[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
  #[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
  pub struct Edge {
    /// Difference between the edge start and edge end.
    pub delta: Vector2D,

    /// Difference between the edge start and quadratic bezier control point (if
    /// any).
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub control_delta: Option<Vector2D>,
  }

  #[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
  #[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
  pub struct MorphEdge {
    /// Difference between the edge start and edge end in the start-state of the
    /// morph shape.
    pub delta: Vector2D,

    /// Difference between the edge start and edge end in the end-state of the
    /// morph shape.
    pub morph_delta: Vector2D,

    /// Difference between the edge start and quadratic bezier control point (if
    /// any) in the start-state of the morph shape.
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub control_delta: Option<Vector2D>,

    /// Difference between the edge start and quadratic bezier control point (if
    /// any) in the end-state of the morph shape.
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub morph_control_delta: Option<Vector2D>,
  }

  #[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
  #[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
  pub struct StyleChange {
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub move_to: Option<Vector2D>,
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub left_fill: Option<usize>,
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub right_fill: Option<usize>,
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub line_style: Option<usize>,
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub new_styles: Option<ShapeStyles>,
  }

  #[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
  #[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
  pub struct MorphStyleChange {
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub move_to: Option<Vector2D>,
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub morph_move_to: Option<Vector2D>,
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub left_fill: Option<usize>,
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub right_fill: Option<usize>,
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub line_style: Option<usize>,
    #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
    pub new_styles: Option<MorphShapeStyles>,
  }
}
