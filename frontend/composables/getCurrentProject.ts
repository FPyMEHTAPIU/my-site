import projects, {ProjectCardData} from "@/composables/projects";

const getCurrentProject = (name: string): ProjectCardData => {
    return projects.find(project => project.name === name)
        || {name: "", skills: [""], type: "", description: "", link: "", photo: "", location: "internal"};
}

export default getCurrentProject;