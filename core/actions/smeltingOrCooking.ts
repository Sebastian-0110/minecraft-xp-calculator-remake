import { Action } from "./types/action";
import { XpRange, XpFlat, XpAmount } from "./types/xp";

export const smeltingOrCooking: Action[] = [
    {
        sources: ["Ancient Debris"],
        xpPerAction: { value: 2 },
    },

    {
        sources: ["Diamond Ore", "Emerald Ore", "Gold Ore"],
        xpPerAction: { value: 1 },
    },

    {
        sources: ["Iron Ore", "Redstone Ore"],
        xpPerAction: { value: 0.7 },
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
        xpPerAction: { value: 0.35 },
    },

    {
        sources: ["Lapiz Ore", "Nether Quartz Ore"],
        xpPerAction: { value: 0.2 },
    },

    {
        sources: ["Wet Sponge", "Wood"],
        xpPerAction: { value: 0.15 },
    },

    {
        sources: ["Others"],
        xpPerAction: { value: 0.1 },
    },
];