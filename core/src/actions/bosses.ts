import { Action } from "./types/action";
import { createXpFlat } from "./types/xp";

export const bosses: Action[] = [
    {
        sources: ["Enderdragon"],
        xpPerAction: createXpFlat(12000),
    },

    {
        sources: ["Wither"],
        xpPerAction: createXpFlat(50),
    },
];
