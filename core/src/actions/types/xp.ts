export interface XpFlat {
    value: number,
}

export interface XpRange {
    min: number,
    max: number,
}

export type XpAmount = XpFlat | XpRange;
