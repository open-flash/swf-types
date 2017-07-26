use avm1::Action;

pub mod fills;
pub mod joins;
pub mod records;

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
  pub event_flags: ClipEventFlags,
  pub key_code: Option<u8>,
  pub actions: Vec<Action>,
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
  CurvedEdge(records::CurvedEdge),
  StraightEdge(records::StraightEdge),
  StyleChange(records::StyleChange),
}
