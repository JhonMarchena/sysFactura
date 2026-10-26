import { Table, Button, Popconfirm } from "antd";
import type { TableProps } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useUsers, useDeleteUser } from "../users/presentation/hooks/useUsersQueries.ts";
import type { Usuario } from "../users/presentation/hooks/useUsersQueries.ts";

export function TablaUsuarios() {
  const { data: usuarios = [], isPending, isError } = useUsers();
  const { mutate: eliminarUsuario, isPending: eliminando } = useDeleteUser();

  const columns: TableProps<Usuario>["columns"] = [
    {
      title: "#",
      key: "index",
      render: (_, __, index) => index + 1,
    },
    { title: "ID", dataIndex: "userID", key: "userID" },
    { title: "Nombre", dataIndex: "nombre", key: "nombre" },
    { title: "Apellido", dataIndex: "apellido", key: "apellido" },
    { title: "Correo", dataIndex: "correo", key: "correo" },
    { title: "Edad", dataIndex: "edad", key: "edad" },
    { title: "Provincia", dataIndex: "provincia", key: "provincia" },
    { title: "Ciudad", dataIndex: "ciudad", key: "ciudad" },
    {
      title: "Acciones",
      key: "acciones",
      render: (_, record) => (
        <Popconfirm
          title="Eliminar usuario"
          description="¿Seguro que quieres eliminar este usuario?"
          okText="Sí"
          cancelText="No"
          onConfirm={() => eliminarUsuario(record.userID)}
        >
          <Button type="text" danger icon={<DeleteOutlined />} />
        </Popconfirm>
      ),
    },
  ];

  if (isError) {
    return <p className="text-red-500">No se pudieron cargar los usuarios.</p>;
  }

  return (
    <Table
      className="w-full h-full"
      columns={columns}
      dataSource={usuarios}
      loading={isPending || eliminando}
      rowKey="userID"
    />
  );
}