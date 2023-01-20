import { Request, Response } from "express";

import { Pet } from "../models/pet";
import { createMenuObject } from "../helpers/createMenuObject";

export const search = (req: Request, res: Response) => {
  let query: string = req.query.q as string;

  let petList = Pet.getName(query);
  res.render("pages/page", {
    menu: createMenuObject(""),
    petList,
  });
};
