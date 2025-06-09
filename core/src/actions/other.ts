import { Action } from "./types/action";
import { createXpRange } from "./types/xp";

export const other: Action[] = [
    {
        sources: ["Bottle O' Enchanting"],
        xpPerAction: createXpRange(3, 11),
    },

    {
        sources: ["Trading With Villager"],
        xpPerAction: createXpRange(3, 6),
    },

    {
        sources: ["Breding Animals"],
        xpPerAction: createXpRange(1, 7),
    },

    {
        sources: ["Catching Fish"],
        xpPerAction: createXpRange(1, 6),
    },
];
