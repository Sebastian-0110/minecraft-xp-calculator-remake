import { XpAmount } from "./xp";

export interface Action {
    sources: string[],
    xpPerAction: XpAmount,
}
