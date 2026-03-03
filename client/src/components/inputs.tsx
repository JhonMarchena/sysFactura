import { Input } from "antd";

interface InputProps {
  placeholder?: string;
  icon?: React.ReactNode;
}

export function InputIcon(props: InputProps) {
  return (
    <div className="w-[25rem]">
      <Input placeholder={props.placeholder} prefix={props.icon} />
    </div>
  );
}

export function InputBasic(props: InputProps) {
  return <Input placeholder={props.placeholder} prefix={props.icon} />;
}
