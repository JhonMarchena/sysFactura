import { Input, Button } from "antd";
//import type { InputProps as AntdInputProps } from "antd";
import type { InputProps } from "antd";
import type { ButtonProps } from "antd";

// interface Props extends AntdInputProps {
//   icon?: React.ReactNode;
//   placeholder?: string;
// }

// 🔹 INPUT TEXT
interface InputTextProps extends InputProps {
  icon?: React.ReactNode;
}
// 🔹 BUTTON
interface InputButtonProps extends ButtonProps {
  placeholder?: string;
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

export function InputText({ ...props }: InputTextProps) {
  return (
    <div className="w-[80%]">
      <Input {...props} placeholder={props.placeholder} prefix={props.icon} />
    </div>
  );
}

export function InputPassword({ ...props }: InputTextProps) {
  return (
    <div className="w-[80%]">
      <Input.Password {...props} placeholder={props.placeholder} />
    </div>
  );
}
