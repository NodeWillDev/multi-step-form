import { Request, Response } from "express";
import Resume from "../../entities/Resume";
import ListingResume from "./ListingResume";

export default class ListingController {

  constructor(
    private listingResume: ListingResume
  ) {
  }

  async handle(request: Request, response: Response) {

    const { id, contact, description, name } = request.body as Resume;


    try {
      const listing = await this.listingResume.execute({
        id,
        contact,
        description,
        name
      });

      return response.status(200).json({
        success: true,
        message: 'Listing with sucess',
        listing
      });
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({
          success: true,
          message: err.message,
        });
      }
    }
  }
}