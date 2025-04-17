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
        projectName: 'A designer\'s website',
        projectPhoto: '/Irina.jpg',
        projectSkills: ['TypeScript', 'Vue.js', 'Nuxt', 'SCSS', 'Figma'],
        projectLink: 'https://iryna-naumova.vercel.app/',
        projectType: 'Web',
        projectDescription: 'A UX/UI designer\s portfolio website.'
    },
    {
        projectName: 'Hero Fan',
        projectPhoto: '/HF.jpg',
        projectSkills: ['JavaScript', 'React.js', 'Next.js', 'Node.js'],
        projectLink: './work/hero_fan',
        projectType: 'Web',
        projectDescription: 'A full-stack (Marvel) Hero Fan webpage.'
    },
    {
        projectName: 'SMTH',
        projectPhoto: '/SMTH.jpg',
        projectSkills: ['TypeScript', 'React Native'],
        projectLink: './work/smth',
        projectType: 'Web',
        projectDescription: 'A mobile app designed to make job searching and hiring stress-free.'
    },
    {
        projectName: 'FdF',
        projectPhoto: '/FdF.png',
        projectSkills: ['C', 'Makefile', 'MLX42 Library'],
        projectLink: './work/fdf',
        projectType: 'Software',
        projectDescription: 'A graphics project that represents a 2D map of numbers in 3D.'
    },
    {
        projectName: 'push_swap',
        projectPhoto: '/push_swap.jpg',
        projectSkills: ['C', 'Makefile'],
        projectLink: './work/push_swap',
        projectType: 'Software',
        projectDescription: 'A sorting algorithm that sorts a stack using another ' +
            'one with pre-calculation logic.'
    },
    {
        projectName: 'libft',
        projectPhoto: '/libft.jpg',
        projectSkills: ['C', 'Makefile'],
        projectLink: './work/libft',
        projectType: 'Software',
        projectDescription: 'A custom library that reimplements many standard ' +
            'C functions, along with linked lists and more.'
    },
    {
        projectName: 'Bee Runner',
        projectPhoto: '/projects/bee_runner/bee_runner.png',
        projectSkills: ['C#', 'Unity'],
        projectLink: './work/bee_runner',
        projectType: 'Game',
        projectDescription: 'An endless runner game created in Unity using C#.'
    },
    {
        projectName: 'Zombie Strike',
        projectPhoto: '/projects/zombie_strike/zombie_strike.jpg',
        projectSkills: ['C++', 'Unreal Engine'],
        projectLink: './work/zombie_strike',
        projectType: 'Game',
        projectDescription: 'A top-down auto-shooter game created in Unreal Engine 5 using C++.'
    },
]

export default projects;