import projects, {ProjectCardData} from "@/composables/projects";

const getCurrentProject = (name: string): ProjectCardData => {
    return projects.find(project => project.projectName === name)
        || {projectName: "", projectSkills: [""], projectType: "", projectDescription: "", projectLink: "", projectPhoto: ""};
}

export default getCurrentProject;