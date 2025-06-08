import { InvalidLevelException } from "./exceptions/invalid-level-exception";

function xpNeededToReachNextLevel(currentLevel: number): number {
    if (currentLevel >= 0 && currentLevel <= 15)
        return 2 * currentLevel + 7;

    if (currentLevel >= 16 && currentLevel <= 30)
        return 5 * currentLevel - 38;

    if (currentLevel >= 31)
        return 9 * currentLevel - 158;

    throw new InvalidLevelException(currentLevel);
}

function xpNeededToReachLevel(currentLevel: number, targetLevel: number): number {
    let xpNeeded: number = 0;

    for (let i: number = currentLevel; i < targetLevel; i++) {
        xpNeeded += xpNeededToReachNextLevel(i);
    }

    return xpNeeded;
}

export default {
    xpNeededToReachLevel,
    xpNeededToReachNextLevel,
};
