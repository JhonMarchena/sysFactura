import { useState } from 'react';
import { InputText, InputButton, InputPassword } from '../../../components/inputs';
import { createUser } from '../../../services/userService.ts';

function User() {
    const [nombre, setName] = useState('')
    const [apellido, setLastName] = useState('')
    const [correo, setEmail] = useState('')
    const [clave, setPassword] = useState('')
    const [edad, setEdad] = useState(0)
    const [direccion, setDireccion] = useState('')
    const [provincia, setProvincia] = useState('')
    const [ciudad, setCiudad] = useState('')
    console.log(nombre)

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        //Aqui va el HTTP request para guardar el usuario (axios)
        try {
            const res = await createUser({
                nombre,
                apellido,
                correo,
                clave,
                edad,
                direccion,
                provincia,
                ciudad
            });

            console.log(res.data);

            if (res.status === 204) {
                alert('Usuario creado exitosamente');
            }

        } catch (error) {
            console.error(error);
        }

        console.log('submit')
    }

    return (
        <form className="flex space-x-4 p-10" onSubmit={handleSubmit}>
            <InputText placeholder="Nombre" value={nombre} onChange={(e) => setName(e.target.value)} />
            <InputText placeholder="Apellido" value={apellido} onChange={(e) => setLastName(e.target.value)} />
            <InputText placeholder="Email" value={correo} onChange={(e) => setEmail(e.target.value)} />
            <InputPassword placeholder="Clave" value={clave} onChange={(e) => setPassword(e.target.value)} />


            <InputText placeholder="Dirección" value={direccion} onChange={(e) => setDireccion(e.target.value)} />
            <InputText placeholder="Provincia" value={provincia} onChange={(e) => setProvincia(e.target.value)} />
            <InputText placeholder="Ciudad" value={ciudad} onChange={(e) => setCiudad(e.target.value)} />
            <InputButton placeholder="Guardar" />
        </form>
    )
}

export default User
