export type ProjectCardData = {
    projectName: string;
    projectPhoto: string;
    projectSkills: string[];
    projectLink: string;
    projectType: string;
    projectDescription: string;
}

const projects:ProjectCardData[] = [
    {
        projectName: 'Hero Fan',
        projectPhoto: './HF.png',
        projectSkills: ['JavaScript', 'React.js', 'Next.js', 'Node.js', 'PostgreSQL'],
        projectLink: './work/hero_fan',
        projectType: 'Web',
        projectDescription: 'A full-stack (Marvel) Hero Fan webpage.'
    },
    {
        projectName: 'SMTH',
        projectPhoto: './SMTH.png',
        projectSkills: ['TypeScript', 'React Native'],
        projectLink: './work/smth',
        projectType: 'Web',
        projectDescription: 'A mobile app designed to make job searching and hiring stress-free.'
    },
    {
        projectName: 'FdF',
        projectPhoto: './FdF.png',
        projectSkills: ['C', 'Makefile', 'MLX42 Library'],
        projectLink: './work/fdf',
        projectType: 'Software',
        projectDescription: 'A graphics project that represents a 2D map of numbers in 3D.'
    },
    {
        projectName: 'push_swap',
        projectPhoto: './push_swap.png',
        projectSkills: ['C', 'Makefile'],
        projectLink: './work/push_swap',
        projectType: 'Software',
        projectDescription: 'A sorting algorithm that sorts a stack using another ' +
            'one with pre-calculation logic.'
    },
    {
        projectName: 'libft',
        projectPhoto: './libft.png',
        projectSkills: ['C', 'Makefile'],
        projectLink: './work/libft',
        projectType: 'Software',
        projectDescription: 'A custom library that reimplements many standard ' +
            'C functions, along with linked lists and more.'
    },
    {
        projectName: 'Bee Runner',
        projectPhoto: './bee_runner.png',
        projectSkills: ['C#', 'Unity'],
        projectLink: './work/bee_runner',
        projectType: 'Game',
        projectDescription: 'An endless runner game created in Unity using C#.'
    },
    {
        projectName: 'Zombie Strike',
        projectPhoto: './zombie_strike.png',
        projectSkills: ['C++', 'Unreal Engine'],
        projectLink: './work/zombie_strike',
        projectType: 'Game',
        projectDescription: 'A top-down auto-shooter game created in Unreal Engine 5 using C++.'
    },
]

export default projects;