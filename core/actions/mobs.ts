import { Action } from "./types/action";
import { XpAmount, XpFlat, XpRange } from "./types/xp";

export const mobs: Action[] = [
    {
        sources: ["All passives (excluding bat)"],
        xpPerAction: { min: 1, max: 3},
    },

    {
        sources: [
            "Cave Spider",
            "Creeper",
            "Drowned",
            "Enderman",
            "Ghast",
            "Hoglin",
            "Husk",
            "Illusioner",
            "Phantom",
            "Piglin",
            "Pillager",
            "Shulker",
            "Silverfish",
            "Skeleton",
            "Spider",
            "Stray",
            "Vex",
            "Vindicator",
            "Witch",
            "Wither Skeleton",
            "Zombie",
            "Zoglin",
            "Zombie Pigman"
        ],
        xpPerAction: { value: 5 },
    },

    {
        sources: ["Endermite"],
        xpPerAction: { value: 3 },
    },

    {
        sources: ["Large Slime", "Large Magma Cube"],
        xpPerAction: { value: 4 },
    },

    {
        sources: ["Medium Slime", "Medium Magma Cube"],
        xpPerAction: { value: 2 },
    },

    {
        sources: ["Small Slime", "Small Magma Cube"],
        xpPerAction: { value: 1 },
    },

    {
        sources: ["Spider Jockey", "Blaze", "Evoker", "Elder Guardian", "Guardian"],
        xpPerAction: { value: 10 },
    },

    {
        sources: ["Chicken Jockey"],
        xpPerAction: { value: 22 },
    },

    {
        sources: ["Baby Hostiles"],
        xpPerAction: { value: 12 },
    },

    {
        sources: ["Ravagaer"],
        xpPerAction: { value: 20 },
    },
]