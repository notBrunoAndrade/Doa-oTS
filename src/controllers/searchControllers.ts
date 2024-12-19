import { Request, Response } from "express";
import { Pet } from "../model/pets";

export const search = (req: Request, res: Response) => {
  const query: string = req.query.q as string;

  const data = Pet.getFromName(query);

  res.render("pages/main", {
    menu: "",
    data,
    query
  });
};
