import { Request, Response } from "express";
import { createObjects } from "../helpers/createMenuObjects";
import { Pet } from "../model/pets";

const home = (req: Request, res: Response) => {
  const data = Pet.getAll();

  res.render("pages/main", {
    menu: createObjects("all"),
    banner: {
      title: "Todos os animais",
      background: "allanimals.jpg",
    },
    data,
  });
};

const dogs = (req: Request, res: Response) => {
  const data = Pet.getFromType("dog");

  res.render("pages/main", {
    menu: createObjects("dogs"),
    banner: {
      title: "Cachorros",
      background: "banner_dog.jpg",
    },
    data,
  });
};

const cats = (req: Request, res: Response) => {
  const data = Pet.getFromType("cat");
  menu: createObjects("cats"),
    res.render("pages/main", {
      banner: {
        title: "Gatos",
        background: "banner_cat.jpg",
      },
      data,
    });
};

const others = (req: Request, res: Response) => {
  const data = Pet.getFromType("others");
  menu: createObjects("others"),
    res.render("pages/main", {
      banner: {
        title: "Outros",
        background: "banner_fish.jpg",
      },
      data,
    });
};

export { home, dogs, cats, others };
