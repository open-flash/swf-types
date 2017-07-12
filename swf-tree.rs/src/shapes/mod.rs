use avm1::Action;

pub mod fills;
pub mod filters;
pub mod joins;

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum Filter {
  Blur(filters::Blur),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum BlendMode {
  Normal,
  Layer,
  Multiply,
  Screen,
  Lighten,
  Darken,
  Difference,
  Add,
  Subtract,
  Invert,
  Alpha,
  Erase,
  Overlay,
  Hardlight,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "kebab-case")]
pub enum CapStyle {
  None,
  Round,
  Square,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum FillStyle {
  Solid(fills::Solid),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum JoinStyle {
  Bevel,
  Miter(joins::Miter),
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
  pub fill: FillStyle,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct CurvedEdge {
  pub control_x: i32,
  pub control_y: i32,
  pub delta_x: i32,
  pub delta_y: i32,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct StraightEdge {
  pub delta_x: i32,
  pub delta_y: i32,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct StyleChange {
  pub delta_x: i32,
  pub delta_y: i32,
  pub left_fill: Option<usize>,
  pub right_fill: Option<usize>,
  pub line_style: Option<usize>,
  pub fill_styles: Option<Vec<FillStyle>>,
  pub line_styles: Option<Vec<LineStyle>>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(tag = "type", rename_all = "kebab-case")]
pub enum ShapeRecord {
  CurvedEdge(CurvedEdge),
  StraightEdge(StraightEdge),
  StyleChange(StyleChange),
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct Shape {
  pub fill_styles: Vec<FillStyle>,
  pub line_styles: Vec<LineStyle>,
  pub records: Vec<ShapeRecord>,
}

#[derive(Serialize, Deserialize, Debug, PartialEq, Eq)]
#[serde(rename_all = "snake_case")]
pub struct ClipEventFlags {
  pub key_up: bool,
  pub key_down: bool,
  pub mouse_up: bool,
  pub mouse_down: bool,
  pub unload: bool,
  pub enter_frane: bool,
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
#[serde(rename_all = "snake_case")]
pub struct ClipAction {
  pub event_flags: ClipEventFlags,
  pub key_code: Option<u8>,
  pub actions: Vec<Action>,
}
