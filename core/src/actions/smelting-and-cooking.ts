import { Action } from "./types/action";
import { createXpFlat } from "./types/xp";

export const smeltingAndCooking: Action[] = [
    {
        sources: ["Ancient Debris"],
        xpPerAction: createXpFlat(2),
    },

    {
        sources: ["Diamond Ore", "Emerald Ore", "Gold Ore"],
        xpPerAction: createXpFlat(1),
    },

    {
        sources: ["Iron Ore", "Redstone Ore"],
        xpPerAction: createXpFlat(0.7),
    },

    {
        sources: [
            "Clay Block",
            "Potato",
            "Raw beef",
            "Raw Chicken",
            "Raw Cod",
            "Raw Mutton",
            "Raw Porkchop",
            "Raw Rabbit",
            "Raw Salmon",
        ],
        xpPerAction: createXpFlat(0.35),
    },

    {
        sources: ["Lapiz Ore", "Nether Quartz Ore"],
        xpPerAction: createXpFlat(0.2),
    },

    {
        sources: ["Wet Sponge", "Wood"],
        xpPerAction: createXpFlat(0.15),
    },

    {
        sources: ["Others"],
        xpPerAction: createXpFlat(0.1),
    },
];
