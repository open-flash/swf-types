#[cfg(feature = "serde")]
use ::serde::{Deserialize, Serialize};

#[cfg(feature = "serde")]
use crate::serde_buffer::{buffer_to_hex, hex_to_buffer};
use crate::ColorTransformWithAlpha;
use crate::Filter;
use crate::Matrix;
use crate::{BlendMode, SoundInfo};

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq)]
pub struct ButtonRecord {
  #[cfg_attr(feature = "serde", serde(flatten))]
  pub state: ButtonStates,
  pub character_id: u16,
  pub depth: u16,
  pub matrix: Matrix,
  pub color_transform: ColorTransformWithAlpha,
  pub filters: Vec<Filter>,
  pub blend_mode: BlendMode,
}

serde_bitflags! {
  pub struct ButtonStates: u8 {
    #[serde(name = "state_up")]
    const UP = 1 << 0;
    #[serde(name = "state_over")]
    const OVER = 1 << 1;
    #[serde(name = "state_down")]
    const DOWN = 1 << 2;
    #[serde(name = "state_hit_test")]
    const HIT_TEST = 1 << 3;
  }
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
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

serde_bitflags! {
  pub struct ButtonStateTransitions: u16 {
    #[serde(name = "idle_to_over_up")]
    const IDLE_TO_OVER_UP = 1 << 0;
    #[serde(name = "over_up_to_idle")]
    const OVER_UP_TO_IDLE = 1 << 1;
    #[serde(name = "over_up_to_over_down")]
    const OVER_UP_TO_OVER_DOWN = 1 << 2;
    #[serde(name = "over_down_to_over_up")]
    const OVER_DOWN_TO_OVER_UP = 1 << 3;
    #[serde(name = "over_down_to_out_down")]
    const OVER_DOWN_TO_OUT_DOWN = 1 << 4;
    #[serde(name = "out_down_to_over_down")]
    const OUT_DOWN_TO_OVER_DOWN = 1 << 5;
    #[serde(name = "out_down_to_idle")]
    const OUT_DOWN_TO_IDLE = 1 << 6;
    #[serde(name = "idle_to_over_down")]
    const IDLE_TO_OVER_DOWN = 1 << 7;
    #[serde(name = "over_down_to_idle")]
    const OVER_DOWN_TO_IDLE = 1 << 8;
  }
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Copy, Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ButtonCond {
  #[cfg_attr(feature = "serde", serde(flatten))]
  pub transitions: ButtonStateTransitions,
  #[cfg_attr(feature = "serde", serde(skip_serializing_if = "Option::is_none"))]
  pub key_press: Option<u32>,
}

#[cfg_attr(feature = "serde", derive(Serialize, Deserialize))]
#[derive(Clone, Debug, PartialEq, Eq, PartialOrd, Ord, Hash)]
pub struct ButtonSound {
  pub sound_id: u16,
  pub sound_info: SoundInfo,
}
