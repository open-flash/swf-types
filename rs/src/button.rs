#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

#[cfg(feature = "serde")]
use crate::serde_buffer::{buffer_to_hex, hex_to_buffer};
use crate::ColorTransformWithAlpha;
use crate::Filter;
use crate::Matrix;
use crate::{BlendMode, SoundInfo};

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct ButtonRecord {
  pub state_up: bool,
  pub state_over: bool,
  pub state_down: bool,
  pub state_hit_test: bool,
  pub character_id: u16,
  pub depth: u16,
  pub matrix: Matrix,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub color_transform: Option<ColorTransformWithAlpha>,
  pub filters: Vec<Filter>,
  pub blend_mode: BlendMode,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ButtonCondAction {
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub conditions: Option<ButtonCond>,
  #[cfg_attr(
    feature = "serde",
    serde(serialize_with = "buffer_to_hex", deserialize_with = "hex_to_buffer")
  )]
  pub actions: Vec<u8>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
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
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub key_press: Option<u32>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize), serde(rename_all = "snake_case"))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ButtonSound {
  pub sound_id: u16,
  pub sound_info: SoundInfo,
}
