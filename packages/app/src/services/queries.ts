import { useQuery } from "@tanstack/react-query";
import { getPlants } from "./api.ts";

export function usePlants() {
  return useQuery({
    queryKey: ["plants"],
    queryFn: getPlants,
  });
}
