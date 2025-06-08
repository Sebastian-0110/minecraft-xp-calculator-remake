import { InvalidLevelException } from "../src/exceptions/invalid-level-exception";
import XpCalculator from "../src/xp-calculator";

const { xpNeededToReachNextLevel, xpNeededToReachLevel } = XpCalculator;

test("Test low next level calculations", () => {
    expect(xpNeededToReachNextLevel(0)).toBe(7);
    expect(xpNeededToReachNextLevel(15)).toBe(37);
});

test("Test medium next level calculations", () => {
    expect(xpNeededToReachNextLevel(16)).toBe(42);
    expect(xpNeededToReachNextLevel(30)).toBe(112);
});

test("Test high next level calculations", () => {
    expect(xpNeededToReachNextLevel(31)).toBe(121);
    expect(xpNeededToReachNextLevel(50)).toBe(292);
});

test("Test invalid next level calculations", () => {
    expect(() => xpNeededToReachNextLevel(-50)).toThrow(InvalidLevelException);
});


test("Test level calculations", () => {
    expect(xpNeededToReachLevel(10, 10)).toBe(0);
    expect(xpNeededToReachLevel(15, 16)).toBe(37);
    expect(xpNeededToReachLevel(30, 33)).toBe(363);
});

test("Invalid level calculations", () => {
    expect(() => xpNeededToReachLevel(-10, -5)).toThrow(InvalidLevelException);
});
