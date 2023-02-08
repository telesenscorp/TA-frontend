import { useFormikContext } from "formik";
import { Fragment } from "react";
import { styler, t } from "../utils";
import Text from "./Text";
interface Props {
  label?: string;
  value?: string;
  onChange?: Gen.FS;
  className?: string;
  error?: string;
  required?: boolean;
  name: string;
  onClick?: void;
  labelColor?: string;
  placeholder?: string;
  maxLength?: number;
  onFocus?: Gen.FS;
  onBlur?: Gen.FS;
  multi?: boolean;
  last?: boolean;
}
const Input = ({
  label = "",
  value,
  onChange = () => {},
  className,
  error,
  required,
  name = "",
  labelColor,
  placeholder,
  maxLength,
  onFocus = () => {},
  onBlur = () => {},
  multi,
  last,
}: Props) => {
  return (
    <div className={styler(["input-wrapper", className, { error }])}>
      <div className="input-border">
        {multi ? (
          <Fragment>
            <textarea
              className="input area-input"
              {...{ name, value, placeholder, maxLength }}
              onChange={(e) => {
                onChange(e.target.value);
                e.target.style.height = "117px";
                if (e.target.value) e.target.style.height = `${e.target.scrollHeight + 20}px`;
              }}
              onFocus={(e) => onFocus(e.target.value)}
              onBlur={(e) => onBlur(e.target.value)}
            />
            <div className="letters-counter cc12">{value?.length}/2000</div>
          </Fragment>
        ) : (
          <input
            type="text"
            className="input"
            {...{ name, value, placeholder, maxLength }}
            onChange={(e) => onChange(e.target.value)}
            onFocus={(e) => onFocus(e.target.value)}
            onBlur={(e) => onBlur(e.target.value)}
            enterKeyHint={last ? "done" : "next"}
            onKeyUp={(e) => {
              if (e.key.toLowerCase() === "enter" && !last) {
                const target = e.target as HTMLInputElement;
                (target.closest(".input-wrapper")!.nextElementSibling!.querySelector(".input") as HTMLElement)!.focus();
                e.preventDefault();
              }
            }}
          />
        )}
      </div>
      {error && (
        <Text size={12} bold color="w" className="mt4 ml16 lh150">
          {error}
        </Text>
      )}
    </div>
  );
};
const FormikInput = ({ name, ...props }: Props) => {
  const { values, errors, touched, setFieldValue } = useFormikContext<Gen.S>();
  const isError = touched[name] && !!errors[name];
  return (
    <Input
      {...{ name, ...props }}
      value={values[name]}
      error={isError ? t(errors[name]) : undefined}
      onChange={(v) => setFieldValue(name, v)}
    />
  );
};
export default FormikInput;
