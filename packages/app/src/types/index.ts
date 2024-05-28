export type Plant = {
  name: string;
  type: "grass" | "tree" | "flower";
  size: number;
};

export interface RootState {
  plants: Plant[];
}
