import { Action } from "./types/action";
import { createXpFlat, createXpRange } from "./types/xp";

export const mobs: Action[] = [
    {
        sources: ["All passives (excluding bat)"],
        xpPerAction: createXpRange(1, 3),
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
        xpPerAction: createXpFlat(5),
    },

    {
        sources: ["Endermite"],
        xpPerAction: createXpFlat(3),
    },

    {
        sources: ["Large Slime", "Large Magma Cube"],
        xpPerAction: createXpFlat(4),
    },

    {
        sources: ["Medium Slime", "Medium Magma Cube"],
        xpPerAction: createXpFlat(2),
    },

    {
        sources: ["Small Slime", "Small Magma Cube"],
        xpPerAction: createXpFlat(1),
    },

    {
        sources: ["Spider Jockey", "Blaze", "Evoker", "Elder Guardian", "Guardian"],
        xpPerAction: createXpFlat(10),
    },

    {
        sources: ["Chicken Jockey"],
        xpPerAction: createXpFlat(22),
    },

    {
        sources: ["Baby Hostiles"],
        xpPerAction: createXpFlat(12),
    },

    {
        sources: ["Ravagaer"],
        xpPerAction: createXpFlat(20),
    },
]
