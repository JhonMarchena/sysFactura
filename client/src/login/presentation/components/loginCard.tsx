import { FaUser } from "react-icons/fa";
import { UserOutlined } from "@ant-design/icons";
import { InputPassword, InputButton, InputText } from "../../../components/inputs";

function loginCard() {
  return (
    <div className="flex relative bg-white rounded-xl w-[60%] h-[70%]">
      <div className="flex items-center justify-center bg-[var(--secondary-color)] w-1/3 h-full rounded-l-xl ">
        <FaUser className="text-[var(--neutral-color)] text-9xl" />
      </div>
      <div className="flex bg-[var(--subsecondary-color)] flex-col w-2/3 h-full rounded-r-xl">

        <div className="flex flex-col p-6 gap-y-10 items-center justify-center h-full w-full">
          <h1 className="text-3xl font-bold text-white">Iniciar Sesión</h1>

          <div className="flex flex-col gap-4 w-[80%] items-center justify-center">
            <InputText placeholder="Nombre de usuario" icon={<UserOutlined />} />
            <InputPassword placeholder="Contraseña"/>
          </div>

          <div>
            <InputButton placeholder="Iniciar Sesión"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default loginCard;
