import { useQuery, useMutation } from "@tanstack/react-query";
import { CreateSession, GetSession, DeleteSession } from "../services/endpoints/endpoints";

export function useGetSession({ onSuccess = () => {}, onError = () => {} } = {}) {
  const query = useQuery({
    queryKey: ["session"],
    queryFn: GetSession,
    onSuccess,
    onError,
  });

  return query;
}

export function useCreateSession({ onSuccess = () => {}, onError = () => {} } = {}) {
  const mutation = useMutation({
    mutationFn: CreateSession,
    onSuccess,
    onError,
  });

  return mutation;
}

export function useDeleteSession({ onSuccess = () => {}, onError = () => {} } = {}) {
  const mutation = useMutation({
    mutationFn: DeleteSession,
    onSuccess,
    onError,
  });

  return mutation;
}
