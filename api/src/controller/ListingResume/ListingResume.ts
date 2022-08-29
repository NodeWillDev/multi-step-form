import Resume from "../../entities/Resume";
import IListingRepository from "../../repositories/resume/IListingRepository";

export default class ListingResume {

  constructor(
    private listingRepository: IListingRepository
  ) {

  }

  async execute(resume?: Resume) {
    const listing = await this.listingRepository.listing(resume);

    if (listing.length < 1)
      throw new Error('Resume not found');

    return listing;

  }
}