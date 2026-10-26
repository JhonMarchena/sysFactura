import { api } from "./api";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

export type UserInput = {
  nombre: string;
  apellido: string;
  correo: string;
  clave: string;
  edad: number;
  direccion: string;
  provincia: string;
  ciudad: string;
};

//CREATE USER
export const useCreateUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (data: UserInput) => {
      const response = await api.post("/usuarios", data);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

//UPDATE USER
export const useUpdateUser = () => {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: async ({ userId, data }: { userId: number; data: UserInput }) => {
        const response = await api.put(`/usuarios/${userId}`, data);
        return response.data;
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ["users"] });
      },
    });
  };

//DELETE USER
export const useDeleteUser = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: async (userId: number) => {
      const response = await api.delete(`/usuarios/${userId}`);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
  });
};

//GET USER BY ID
export const useGetUserById = (userId: number) => {
  return useQuery({
    queryKey: ["user", userId],
    queryFn: async () => {
      const response = await api.get(`/usuarios/${userId}`);
      return response.data;
    },
  });
};

//GET ALL USERS
export const useUsers = () => {
  return useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const response = await api.get("/usuarios");
      return response.data ?? [];
    },
  });
};
