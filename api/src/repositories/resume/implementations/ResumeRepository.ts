import AbstractResume from "../../../abstract/AbstractResume";
import Resume from "../../../entities/Resume";;
import IResumeRepository from "../IResumeRepository";

export default class ResumeRepository extends AbstractResume implements IResumeRepository {

  async save(resume: Resume): Promise<void> {
    await this.repository.save(resume);
  }

  async resumeAlredyExists(contact: string): Promise<boolean> {
    const result = await this.repository.findOneBy({
      contact
    });
    if (result)
      return true;
    return false;
  }
}