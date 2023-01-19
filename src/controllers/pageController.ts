import { Request, Response } from "express";

import { createMenuObject } from "../helpers/createMenuObject";
import { Pet } from "../models/pet";

export const home = (req: Request, res: Response) => {
  let petList = Pet.getAll();

  res.render("pages/page", {
    banner: {
      menu: createMenuObject("all"),
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    petList,
  });
};

export const dogs = (req: Request, res: Response) => {
  let petList = Pet.getType("dog");

  res.render("pages/page", {
    menu: createMenuObject("dog"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    petList,
  });
};

export const cats = (req: Request, res: Response) => {
  let petList = Pet.getType("cat");
  res.render("pages/page", {
    menu: createMenuObject("cat"),
    banner: {
      title: "Gatos",
      background: "banner_cat.jpg",
    },
    petList,
  });
};

export const fishes = (req: Request, res: Response) => {
  let petList = Pet.getType("fish");
  res.render("pages/page", {
    menu: createMenuObject("fish"),
    banner: {
      title: "Peixes",
      background: "banner_fish.jpg",
    },
    petList,
  });
};
