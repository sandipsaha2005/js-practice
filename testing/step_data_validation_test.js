import { assertEquals } from "jsr:@std/assert";

export function validateUser(user) {
  const errors = [];

  if (!user.name || typeof user.name !== "string") {
    errors.push("Name is required and must be a string");
  }

  if (!user.email || !user.email.includes("@")) {
    errors.push("Valid email is required");
  }

  if (
    user.age !== undefined && (typeof user.age !== "number" || user.age < 18)
  ) {
    errors.push("Age must be a number and at least 18");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

// user_processor_test.ts

Deno.test("validateUser", async (t) => {
  await t.step("should validate a correct user object", () => {
    const user = {
      name: "John Doe",
      email: "john@example.com",
      age: 30,
    };

    const result = validateUser(user);
    assertEquals(result.valid, true);
    assertEquals(result.errors.length, 0);
  });

  await t.step("should return errors for invalid user", () => {
    const user = {
      name: "",
      email: "invalid-email",
      age: 16,
    };

    const result = validateUser(user);
    assertEquals(result.valid, false);
    assertEquals(result.errors.length, 3);
    assertEquals(result.errors[0], "Name is required and must be a string");
    assertEquals(result.errors[1], "Valid email is required");
    assertEquals(result.errors[2], "Age must be a number and at least 18");
  });

  await t.step("should handle missing properties", () => {
    const user = {
      name: "Jane Doe",
      // email and age missing
    };

    const result = validateUser(user);
    assertEquals(result.valid, false);
    assertEquals(result.errors.length, 1);
    assertEquals(result.errors[0], "Valid email is required");
  });
});
