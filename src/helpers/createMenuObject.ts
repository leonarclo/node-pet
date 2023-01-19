type menuOptions = "" | "all" | "dog" | "cat" | "fish";

export const createMenuObject = (active: menuOptions) => {
  let menu = {
    all: false,
    dog: false,
    cat: false,
    fish: false,
  };

  if (active !== "") {
    menu[active] = true;
  }
  return menu;
};
