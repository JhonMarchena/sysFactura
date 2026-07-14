import { Input, Button, InputNumber } from "antd";
//import type { InputProps as AntdInputProps } from "antd";
import type { InputProps } from "antd";
import type { ButtonProps } from "antd";
import type { InputNumberProps as AntdInputNumberProps } from "antd";

// interface Props extends AntdInputProps {
//   icon?: React.ReactNode;
//   placeholder?: string;
// }

// INPUT TEXT
interface InputTextProps extends InputProps {
  icon?: React.ReactNode;
}
// BUTTON
interface InputButtonProps extends ButtonProps {
  placeholder?: string;
}

// INPUT NUMBER
interface InputNumberProps extends AntdInputNumberProps {
  placeholder?: string;
  disabled?: boolean;
}

export function InputButton({ placeholder, ...props }: InputButtonProps) {
  return (
    <div className="w-[80%] ">
      <Button className="custom-button" htmlType="submit" onClick={props.onClick}>
        {placeholder}
      </Button>
    </div>
  );
}

export function InputNumberComponent({ placeholder }: InputNumberProps) {
  return (
    <div className="w-[80%] ">
      <InputNumber placeholder={placeholder} />
    </div>
  )
}

export function InputText({ icon, ...props }: InputTextProps) {
  return (
    <div className="w-[80%]">
      <Input placeholder={props.placeholder} prefix={icon} />
    </div>
  );
}

export function InputPassword({ ...props }: InputTextProps) {
  return (
    <div className="w-[80%]">
      <Input.Password placeholder={props.placeholder} />
    </div>
  );
}
