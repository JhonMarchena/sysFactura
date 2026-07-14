import { Table } from "antd";
import type { TableProps } from "antd";
import { useEffect, useState } from "react";
import { getUsers } from "../services/userService.ts";

interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  correo: string;
  edad: number;
  direccion: string;
  provincia: string;
  ciudad: string;
}

const columns: TableProps<Usuario>["columns"] = [
  { title: "Nombre", dataIndex: "nombre", key: "nombre" },
  { title: "Apellido", dataIndex: "apellido", key: "apellido" },
  { title: "Correo", dataIndex: "correo", key: "correo" },
  { title: "Edad", dataIndex: "edad", key: "edad" },
  { title: "Provincia", dataIndex: "provincia", key: "provincia" },
  { title: "Ciudad", dataIndex: "ciudad", key: "ciudad" },
];

export function TablaUsuarios() {
  const [data, setData] = useState<Usuario[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await getUsers();
        setData(res.data);
      } catch (error) {
        console.error("Error al cargar usuarios:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  return (
    <Table
      columns={columns}
      dataSource={data}
      loading={loading}
      rowKey="id"
    />
  );
}