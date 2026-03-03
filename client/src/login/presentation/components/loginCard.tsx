import { FaUser } from "react-icons/fa";
import { UserOutlined } from "@ant-design/icons";
import { InputBasic, InputIcon } from "../../../components/inputs";

function loginCard() {
  return (
    <div className="flex relative bg-white rounded-xl w-[60%] h-[70%]">
      <div className="flex items-center justify-center  bg-[var(--secondary-color)] w-1/3 h-full rounded-l-xl ">
        <FaUser className="text-[var(--neutral-color)] text-9xl" />
      </div>
      <div className="flex bg-[var(--subsecondary-color)] flex-col w-2/3 h-full rounded-r-xl">
      <h1>Iniciar Sesión</h1>
        <div>
      
          <InputIcon placeholder="Nombre de usuario" icon={<UserOutlined />} />
        </div>

        <div>
          <InputBasic placeholder="Contraseña" />
        </div>
      </div>
    </div>
  );
}

export default loginCard;
