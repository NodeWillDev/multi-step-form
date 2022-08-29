import Resume from "../../entities/Resume";
import IResumeRepository from "../../repositories/resume/IResumeRepository";

export default class PostResume {

  constructor(
    private resumeRepository: IResumeRepository
  ) {

  }

  async execute(resume: Resume) {

    if (await this.resumeRepository.resumeAlredyExists(resume.contact))
      throw new Error('Resume alredy exists');

    await this.resumeRepository.save(resume);

  }
}