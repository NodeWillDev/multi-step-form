import Resume from "../../entities/Resume";

export default interface IListingRepository {

  listing(resume?: Resume) : Promise<Resume[]>
}