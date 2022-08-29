import Resume from "../../entities/Resume";

export default interface IResumeRepository {

  resumeAlredyExists(contact: string) : Promise<boolean>;

  save(resume: Resume) : Promise<void>;
}