import { Request, Response } from "express";

export const error404 = (req: Request, res: Response) => {
    res.render("pages/404")
};
