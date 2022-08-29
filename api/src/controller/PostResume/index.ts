import ResumeRepository from "../../repositories/resume/implementations/ResumeRepository";
import PostResume from "./PostResume";
import ResumeController from "./ResumeController";

const repositoryResume = new ResumeRepository();

const postResume = new PostResume(repositoryResume);

const controllerResume = new ResumeController(postResume);

export default controllerResume;