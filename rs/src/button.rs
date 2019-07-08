use ::serde::{Deserialize, Serialize};

use crate::helpers::{buffer_to_hex, hex_to_buffer};
use crate::BlendMode;
use crate::ColorTransformWithAlpha;
use crate::Filter;
use crate::Matrix;

#[derive(Clone, Debug, PartialEq, Eq, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct ButtonRecord {
  pub state_up: bool,
  pub state_over: bool,
  pub state_down: bool,
  pub state_hit_test: bool,
  pub character_id: u16,
  pub depth: u16,
  pub matrix: Matrix,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub color_transform: Option<ColorTransformWithAlpha>,
  pub filters: Vec<Filter>,
  pub blend_mode: BlendMode,
}

#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct ButtonCondAction {
  #[serde(skip_serializing_if = "Option::is_none")]
  pub conditions: Option<ButtonCond>,
  #[serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")]
  pub actions: Vec<u8>,
}

#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash, Serialize, Deserialize)]
#[serde(rename_all = "snake_case")]
pub struct ButtonCond {
  pub idle_to_over_up: bool,
  pub over_up_to_idle: bool,
  pub over_up_to_over_down: bool,
  pub over_down_to_over_up: bool,
  pub over_down_to_out_down: bool,
  pub out_down_to_over_down: bool,
  pub out_down_to_idle: bool,
  pub idle_to_over_down: bool,
  pub over_down_to_idle: bool,
  #[serde(skip_serializing_if = "Option::is_none")]
  pub key_press: Option<u32>,
}
