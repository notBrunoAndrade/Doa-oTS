type menuOptions = "" | "all" | "dogs" | "cats" | "others";

export const createObjects = (menuopt: menuOptions) => {
  let options = {
    all: false,
    dogs: false,
    cats: false,
    others: false,
  };

  if (menuopt !== "") {
    options[menuopt] = true;
  }

  return options;
};
