import { Request, Response } from "express";
import Resume from "../../entities/Resume";
import PostResume from "./PostResume";

export default class ResumeController {

  constructor(
    private postResume: PostResume
  ) {

  }

  async handle(request: Request, response: Response) {
    const { contact, description, name } = request.body as Resume;

    try {
      await this.postResume.execute({
        contact,
        name,
        description
      });


      return response.status(200).json({
        success: true,
        message: 'Resume add',
        resume: {
          contact,
          name,
          description
        }
      })
    } catch (err) {
      if (err instanceof Error) {
        return response.status(400).json({
          success: false,
          message: err.message
        })
      }
    }
  }
}