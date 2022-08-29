import ListingRepository from "../../repositories/resume/implementations/ListingRepository";
import ListingController from "./ListingController";
import ListingResume from "./ListingResume";

const listingRepository = new ListingRepository();

const listingResume = new ListingResume(listingRepository);

const listingController = new ListingController(listingResume);

export default listingController;