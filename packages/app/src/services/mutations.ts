import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Plant } from "../types/plant.ts";
import { addPlant, waterPlant } from "./api.ts";

const queryClient = useQueryClient();

export function useAddPlant() {
  return useMutation({
    mutationFn: (plant: Plant) => addPlant(plant),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["plants"] });
    },
  });
}

export function useWaterPlant() {
  return useMutation({
    mutationFn: (plantId: number) => waterPlant(plantId),
    onSettled: async () => {
      await queryClient.invalidateQueries({ queryKey: ["plants"] });
    },
  });
}
