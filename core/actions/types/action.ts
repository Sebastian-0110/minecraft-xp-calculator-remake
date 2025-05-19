import { XpAmount } from "./xp";

export interface action {
    sources: string[],
    xpPerAction: XpAmount,
}
