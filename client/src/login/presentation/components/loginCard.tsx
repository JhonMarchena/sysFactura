import { FaUser } from "react-icons/fa";

function loginCard() {
  return (
    <div className="flex relative bg-white rounded-xl w-[60%] h-[70%]">
      <div className="flex items-center justify-center  bg-[var(--secondary-color)] w-1/3 h-full rounded-l-xl ">
        <FaUser className="text-[var(--neutral-color)] text-9xl" />
      </div>
      <div className="flex flex-col bg-red-600 w-2/3 h-full rounded-r-xl">
        <h1 className="text-white text-[1.5rem] font-medium m-auto">Usuario</h1>

        <h1 className="text-white text-[1.5rem] font-medium m-auto">
          Contraseña
        </h1>
      </div>
    </div>
  );
}

export default loginCard;
