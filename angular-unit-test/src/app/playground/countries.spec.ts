import { countries } from "./countries";

describe("countries", () => {
    it("should contain countries codes", () => {
        const result = countries();
        expect(result).toContain("UA");
        expect(result).toContain("RU");
        expect(result).toContain("BY");
    });
});

