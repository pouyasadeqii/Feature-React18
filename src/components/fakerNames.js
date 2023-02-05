import { faker } from "@faker-js/faker";

export const fakeNames = Array.from(Array(5000), () => {
  return faker.name.findName();
});
