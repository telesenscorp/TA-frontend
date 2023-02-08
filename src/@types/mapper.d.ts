declare namespace Mapper {
  type Colors = "b" | "w" | "c1" | "c2" | "c3" | "c4" | "c5" | "c6" | "c7" | "c8" | "c9" | "c10" | "c11" | "c12" | "c13" | "c14" | "c15" | "g1" | "g2" | "t";
  type Index =
    | "0"
    | "2"
    | "4"
    | "6"
    | "8"
    | "10"
    | "12"
    | "14"
    | "16"
    | "18"
    | "20"
    | "22"
    | "24"
    | "26"
    | "28"
    | "30"
    | "32"
    | "34"
    | "36"
    | "38"
    | "40"
    | "42"
    | "44"
    | "46"
    | "48"
    | "50"
    | "52"
    | "54"
    | "56"
    | "58"
    | "60"
    | "62"
    | "64";
  type Odd =
    | "1"
    | "3"
    | "5"
    | "7"
    | "9"
    | "11"
    | "13"
    | "15"
    | "17"
    | "19"
    | "21"
    | "23"
    | "25"
    | "27"
    | "29"
    | "31"
    | "33"
    | "35"
    | "37"
    | "39"
    | "41"
    | "43"
    | "45"
    | "47"
    | "49"
    | "51"
    | "53"
    | "55"
    | "57"
    | "59"
    | "61"
    | "63"
    | "65"
    | "66"
    | "67"
    | "68"
    | "69"
    | "70"
    | "71"
    | "72";
  type Count72 = Index | Odd;
  type IndexGenerator<Prefix> = {
    [Property in Index as `${Prefix}${Property}`]?: boolean;
  };
  type Count72Generator<Prefix> = {
    [Property in Count72 as `${Prefix}${Property}`]?: boolean;
  };
  type ColorGenerator<Prefix> = {
    [Property in Colors as `${Prefix}${Property}`]?: boolean;
  };
  type TypeGenerator<Type> = {
    [Property in Type]?: boolean;
  };
}
