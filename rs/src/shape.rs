#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

use crate::fill_styles;
use crate::join_styles;
#[cfg(feature = "serde")]
use crate::serde_buffer::{buffer_to_hex, hex_to_buffer};

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "PascalCase"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum CapStyle {
  None,
  Round,
  Square,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
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

serde_bitflags! {
  pub struct ClipEventFlags: u32 {
    #[serde(name = "key_up")]
    const KEY_UP = 1 << 7;
    #[serde(name = "key_down")]
    const KEY_DOWN = 1 << 6;
    #[serde(name = "mouse_up")]
    const MOUSE_UP = 1 << 5;
    #[serde(name = "mouse_down")]
    const MOUSE_DOWN = 1 << 4;
    #[serde(name = "mouse_move")]
    const MOUSE_MOVE = 1 << 3;
    #[serde(name = "unload")]
    const UNLOAD = 1 << 2;
    #[serde(name = "enter_frame")]
    const ENTER_FRAME = 1 << 1;
    #[serde(name = "load")]
    const LOAD = 1 << 0;
    #[serde(name = "drag_over")]
    const DRAG_OVER = 1 << 15;
    #[serde(name = "roll_out")]
    const ROLL_OUT = 1 << 14;
    #[serde(name = "roll_over")]
    const ROLL_OVER = 1 << 13;
    #[serde(name = "release_outside")]
    const RELEASE_OUTSIDE = 1 << 12;
    #[serde(name = "release")]
    const RELEASE = 1 << 11;
    #[serde(name = "press")]
    const PRESS = 1 << 10;
    #[serde(name = "initialize")]
    const INITIALIZE = 1 << 9;
    #[serde(name = "data")]
    const DATA = 1 << 8;
    #[serde(name = "construct")]
    const CONSTRUCT = 1 << 18;
    #[serde(name = "key_press")]
    const KEY_PRESS = 1 << 17;
    #[serde(name = "drag_out")]
    const DRAG_OUT = 1 << 16;
  }
}

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "PascalCase")
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
  serde(tag = "type", rename_all = "PascalCase")
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
  serde(tag = "type", rename_all = "PascalCase")
)]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum JoinStyle {
  Bevel,
  Miter(join_styles::Miter),
  Round,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct LineStyle {
  pub width: u16,
  pub start_cap: CapStyle,
  pub end_cap: CapStyle,
  pub join: JoinStyle,
  #[serde(flatten)]
  pub flags: StyleFlags,
  pub fill: FillStyle,
}

serdcfg_attr(feature = "serde", serde(flatten))
  pub struct StyleFlags: u16 {
    #[serde(name = "no_h_scale")]
    const NO_H_SCALE = 1 << 2;
    #[serde(name = "no_v_scale")]
    const NO_V_SCALE = 1 << 1;
    #[serde(name = "no_close")]
    const NO_CLOSE = 1 << 10;
    #[serde(name = "pixel_hinting")]
    const PIXEL_HINTING = 1 << 0;
  }
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphLineStyle {
  pub width: u16,
  pub morph_width: u16,
  pub start_cap: CapStyle,
  pub end_cap: CapStyle,
  pub join: JoinStyle,
  #[serde(flatten)]
  pub flags: StyleFlags,
  pub fill: MorphFillStyle,
}

#[cfcfg_attr(feature = "serde", serde(flatten)) = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Glyph {
  pub records: Vec<ShapeRecord>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct Shape {
  pub initial_styles: ShapeStyles,
  pub records: Vec<ShapeRecord>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct MorphShape {
  pub initial_styles: MorphShapeStyles,
  pub records: Vec<MorphShapeRecord>,
}

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "PascalCase")
)]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum ShapeRecord {
  Edge(shape_records::Edge),
  StyleChange(shape_records::StyleChange),
}

#[cfg_attr(
  feature = "serde",
  derive(Serialize, Deserialize),
  serde(tag = "type", rename_all = "PascalCase")
)]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub enum MorphShapeRecord {
  Edge(shape_records::MorphEdge),
  StyleChange(shape_records::MorphStyleChange),
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ShapeStyles {
  pub fill: Vec<FillStyle>,
  pub line: Vec<LineStyle>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
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
