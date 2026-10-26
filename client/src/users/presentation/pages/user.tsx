import { InputText, InputPassword, InputNumberComponent } from '../../../components/inputs';
import ModalComponent from '../../../components/modal';
import { TablaUsuarios } from '../../../components/table.tsx';
import React from 'react';

function User() {
  const [form, setForm] = React.useState({
    nombre: '',
    apellido: '',
    correo: '',
    clave: '',
    direccion: '',
    edad: 0,
    provincia: '',
    ciudad: ''
  });

  const handleChange = (field: string, value: string | number) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = () => {
    // Handle form submission
  };

  return (
    <div className="w-screen h-screen flex flex-col space-y-6 p-10">
      <div className="w-full flex space-x-4 items-center">
        <ModalComponent title="Crear usuario" onSubmit={handleSubmit}>
          <InputText placeholder="Nombre" value={form.nombre}
            onChange={(e) => handleChange('nombre', e.target.value)} />
          <InputText placeholder="Apellido" value={form.apellido}
            onChange={(e) => handleChange('apellido', e.target.value)} />
          <InputText placeholder="Email" value={form.correo}
            onChange={(e) => handleChange('correo', e.target.value)} />
          <InputPassword placeholder="Clave" value={form.clave}
            onChange={(e) => handleChange('clave', e.target.value)} />
          <InputText placeholder="Dirección" className="col-span-2" value={form.direccion}
            onChange={(e) => handleChange('direccion', e.target.value)} />
          <InputNumberComponent placeholder="Edad" value={form.edad}
            onChange={(value) => handleChange('edad', value ?? 0)} />
          <InputText placeholder="Provincia" value={form.provincia}
            onChange={(e) => handleChange('provincia', e.target.value)} />
          <InputText placeholder="Ciudad" value={form.ciudad}
            onChange={(e) => handleChange('ciudad', e.target.value)} />
        </ModalComponent>
      </div>

      <div className="w-full">
        <TablaUsuarios />
      </div>
    </div>
  );
}

export default User;