declare namespace Classes {
  type Flex = Mapper.TypeGenerator<"f1" | "f2" | "f3" | "f4" | "f5" | "f6" | "f7" | "f8" | "f9" | "f10" | "f11" | "f12">;
  type PaddingName = "p" | "pb" | "pt" | "pl" | "pr" | "ph" | "pv";
  type MarginName = "m" | "mb" | "mt" | "ml" | "mr" | "mh" | "mv";
  interface Paddings extends Mapper.IndexGenerator<PaddingName> {}
  interface Margins extends Mapper.IndexGenerator<MarginName> {}
  type Padding = Mapper.IndexGenerator<"p">;
  type PaddingBottom = Mapper.IndexGenerator<"pb">;
  type PaddingTop = Mapper.IndexGenerator<"pt">;
  type PaddingLeft = Mapper.IndexGenerator<"pl">;
  type PaddingRight = Mapper.IndexGenerator<"pr">;
  type PaddingHorizontal = Mapper.IndexGenerator<"ph">;
  type PaddingVertical = Mapper.IndexGenerator<"pv">;
  type Margin = Mapper.IndexGenerator<"p">;
  type MarginBottom = Mapper.IndexGenerator<"pb">;
  type MarginTop = Mapper.IndexGenerator<"pt">;
  type MarginLeft = Mapper.IndexGenerator<"pl">;
  type MarginRight = Mapper.IndexGenerator<"pr">;
  type MarginHorizontal = Mapper.IndexGenerator<"ph">;
  type MarginVertical = Mapper.IndexGenerator<"pv">;
  type Gap = Mapper.TypeGenerator<"g0" | "g2" | "g4" | "g6" | "g8" | "g10" | "g12" | "g14" | "g16">;
  type ZIndex = Mapper.TypeGenerator<
    | "z0"
    | "z1"
    | "z-1"
    | "z2"
    | "z-2"
    | "z3"
    | "z-3"
    | "z4"
    | "z-4"
    | "z5"
    | "z-5"
    | "z6"
    | "z-6"
    | "z7"
    | "z-7"
    | "z8"
    | "z-8"
    | "z9"
    | "z-9"
    | "z10"
    | "z-10"
  >;
  type BG = Mapper.ColorGenerator<"bg">;
  type Color = Mapper.ColorGenerator<"c">;
  type TextAlign = Mapper.TypeGenerator<"text-center" | "text-left" | "text-right">;
  type Align = Mapper.TypeGenerator<
    | "align-center"
    | "align-right"
    | "align-left"
    | "justify-center"
    | "justify-right"
    | "justify-left"
    | "justify-between"
    | "justify-around"
    | "justify-evenly"
  >;
  type FontSize = Mapper.Count72Generator<"fs-">;
  type FontType = Mapper.TypeGenerator<"ft-pr" | "ft-pi" | "ft-pb">;
  type Display = Mapper.TypeGenerator<"d-grid" | "d-none" | "d-block" | "d-table" | "d-flex">;
  type DisplayFlex = Mapper.TypeGenerator<"flex-r" | "flex-rr" | "flex-c" | "flex-cr" | "frc" | "fcc" | "flex-center">;
  type General = Mapper.TypeGenerator<"full-width" | "width-wrapper" | "overflow-hidden">;
  interface Box extends Margins, Paddings, Flex, ZIndex {}
  interface Text extends FontSize, FontType, Color, TextAlign {}
  interface Container extends General, Display, DisplayFlex, Align, BG, Gap {}
  type ColorsCollection = {
    [Property in Mapper.Colors]: string;
  };
  interface All
    extends Flex,
      PaddingName,
      Padding,
      PaddingBottom,
      PaddingTop,
      PaddingLeft,
      PaddingRight,
      PaddingHorizontal,
      PaddingVertical,
      MarginName,
      Margin,
      MarginBottom,
      MarginTop,
      MarginLeft,
      MarginRight,
      MarginHorizontal,
      MarginVertical,
      Gap,
      ZIndex,
      BG,
      Color,
      TextAlign,
      Align,
      FontSize,
      FontType,
      Display,
      DisplayFlex,
      General {}
}
