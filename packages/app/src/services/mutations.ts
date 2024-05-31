import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plant } from "../types/plant.ts";
import { addPlant, waterPlant } from "./api.ts";

export function useAddPlant() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (plant: Plant) => addPlant(plant),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["plants"] });
    },
  });
}

export function useWaterPlant() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (plantId: number) => waterPlant(plantId),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["plants"] });
    },
  });
}
