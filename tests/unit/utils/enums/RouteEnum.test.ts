import { RouteEnum } from "../../../../src/utils/enums/RouteEnum";

describe("RouteEnum", () => {
  it("should contain correct routes", () => {
    expect(RouteEnum).toEqual({
      ABOUT_US: "/sobre-nos",
      INITIATIVES: "/nossas-iniciativas",
      TESTIMONIALS: "/depoimentos",
      JOIN_US: "/faca-parte",
      SUPPORT_US: "/seja-um-apoiador",
      DESIGN: "/design",
    });
  });
});
