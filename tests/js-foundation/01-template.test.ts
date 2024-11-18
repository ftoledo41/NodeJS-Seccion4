import { emailTemplate } from "./../../src/js-foundation/01-template";

describe("js-foundation/01-template.ts", () => {
  test("emailTemplate should contain a greeting", () => {
    // La prueba a ejecutar

    expect(emailTemplate).toContain("Hi, ");
  });

  test("emailTemplate should contain {{name}} and {{orderId}}", () => {
    // Esto
    expect(emailTemplate).toMatch(/{{name}}/);
    expect(emailTemplate).toMatch(/{{orderId}}/);

    //o
    expect(emailTemplate).toContain("{{name}}");
    expect(emailTemplate).toContain("{{orderId}}");
  });
});
