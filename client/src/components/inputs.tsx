import { Input, Button} from "antd";

interface InputProps {
  placeholder?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export function InputButton(props: InputProps) {
  return (
    <div className="w-[80%] ">
      <Button className="custom-button">{props.placeholder}</Button>
    </div>
  );
}

export function InputIcon(props: InputProps) {
  return (
    <div className="w-[80%]">
      <Input placeholder={props.placeholder} prefix={props.icon} />
    </div>
  );
}

export function InputPassword(props: InputProps) {
  return (
    <div className="w-[80%]">
      <Input.Password placeholder={props.placeholder} />
    </div>
  );
}
