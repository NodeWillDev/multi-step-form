import AbstractResume from "../../../abstract/AbstractResume";
import Resume from "../../../entities/Resume";
import IListingRepository from "../IListingRepository";

export default class ListingRepository extends AbstractResume implements IListingRepository {

  async listing(resume?: Resume): Promise<Resume[]> {

    let result: Resume[] = [];
    
    if (resume) {
      for (const data of await this.repository.findBy(resume)) {
        result.push(data);
      }
    } else
      result = await this.repository.find();      

    return result;
  }
}