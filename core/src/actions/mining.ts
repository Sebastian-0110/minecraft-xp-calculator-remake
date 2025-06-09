import { Action } from "./types/action";
import { createXpRange } from "./types/xp";

export const mining: Action[] = [
    {
        sources: ["Monster Spawner"],
        xpPerAction: createXpRange(1, 3),
    },

    {
        sources: ["Redstone Ore"],
        xpPerAction: createXpRange(1, 5),
    },

    {
        sources: ["Lapis Ore", "Nether Quarz Ore"],
        xpPerAction: createXpRange(2, 5),
    },

    {
        sources: ["Diamond Ore", "Emerald Ore"],
        xpPerAction: createXpRange(2, 7),
    },

    {
        sources: ["Coal Ore"],
        xpPerAction: createXpRange(0, 2),
    },
];
