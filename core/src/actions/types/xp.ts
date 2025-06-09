export interface XpFlat {
    type: "flat",
    value: number,
}

export interface XpRange {
    type: "range",
    min: number,
    max: number,
}

export const createXpFlat = (value: number): XpFlat => {
    return { type: "flat", value };
};

export const createXpRange = (min: number, max: number): XpRange => {
    return { type: "range", min, max };
};

export type XpAmount = XpFlat | XpRange;
