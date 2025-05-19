import { Action } from "./types/action";

export const mining: Action[] = [
    {
        sources: ["Monster Spawner"],
        xpPerAction: { min: 1, max: 3 },
    },

    {
        sources: ["Redstone Ore"],
        xpPerAction: { min: 1, max: 5 },
    },

    {
        sources: ["Lapis Ore", "Nether Quarz Ore"],
        xpPerAction: { min: 2, max: 5 },
    },

    {
        sources: ["Diamond Ore", "Emerald Ore"],
        xpPerAction: { min: 3, max: 7 },
    },

    {
        sources: ["Coal Ore"],
        xpPerAction: { min: 0, max: 2 },
    },
];
