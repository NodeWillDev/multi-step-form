import { Repository } from "typeorm";
import Resume from "../entities/Resume";
import { AppDataSource } from "../typeorm/data-source";

export default abstract class AbstractResume {
  
  protected repository: Repository<Resume>

  constructor() {
    this.repository = AppDataSource.getRepository(Resume);
  }
}