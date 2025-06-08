export class InvalidLevelException extends Error {
    constructor(level: Number) {
        super(`Level ${level} is invalid. Levels should be greater or equal to 0`);
        this.name = "InvalidLevelException";
    }
}
