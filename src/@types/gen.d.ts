declare namespace Gen {
  type D<T> = {
    [Property in T]: any;
  };
  interface O {
    [key: string]: any;
  }
  interface S {
    [key: string]: string;
  }
  interface ListItem {
    label: string;
    value: any;
    id?: string | number;
  }
  type FSAI = (key: string, value: any, index: number) => void;
  type FSNI = (key: string, value: number, index: number) => void;
  type FSBI = (key: string, value: boolean, index: number) => void;
  type FSA = (key: string, value: any) => void;
  type FSS = (key: string, value: string) => void;
  type FSN = (key: string, value: number) => void;
  type FS = (value: string) => void;
  type FB = (value: boolean) => void;
  type FO = (value: O) => void;
  type F = () => void;
  type PointerEv = React.PointerEvent<HTMLDivElement>;
  type ICH = React.ChangeEventHandler<HTMLInputElement>;
}
