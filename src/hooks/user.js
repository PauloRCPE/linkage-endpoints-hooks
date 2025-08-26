import { useQuery, useMutation } from "@tanstack/react-query";
import { CreateUser, GetUser, UpdateUser, DeleteUser } from "../services/endpoints/endpoints";

export function useGetUser({ onSuccess = () => {}, onError = () => {} } = {}) {
  const query = useQuery({
    queryKey: ["user"],
    queryFn: GetUser,
    onSuccess,
    onError,
  });

  return query;
}

export function useCreateUser({ onSuccess = () => {}, onError = () => {} } = {}) {
  const mutation = useMutation({
    mutationFn: CreateUser,
    onSuccess,
    onError,
  });

  return mutation;
}

export function useUpdateUser({ onSuccess = () => {}, onError = () => {} } = {}) {
  const mutation = useMutation({
    mutationFn: UpdateUser,
    onSuccess,
    onError,
  });

  return mutation;
}

export function useDeleteUser({ onSuccess = () => {}, onError = () => {} } = {}) {
  const mutation = useMutation({
    mutationFn: DeleteUser,
    onSuccess,
    onError,
  });

  return mutation;
}
