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
        projectType: 'web',
        projectDescription: 'Hero Fan Description'
    },
    {
        projectName: 'FdF',
        projectPhoto: './FdF.png',
        projectSkills: ['C', 'Makefile', 'MLX42 Library'],
        projectLink: './work/fdf',
        projectType: 'software',
        projectDescription: 'FdF Description'
    },
    {
        projectName: 'push_swap',
        projectPhoto: './push_swap.png',
        projectSkills: ['C', 'Makefile'],
        projectLink: './work/push_swap',
        projectType: 'software',
        projectDescription: 'push_swap Description'
    },
    {
        projectName: 'libft',
        projectPhoto: './libft.png',
        projectSkills: ['C', 'Makefile'],
        projectLink: './work/libft',
        projectType: 'software',
        projectDescription: 'libft Description'
    },
    {
        projectName: 'Bee Runner',
        projectPhoto: './bee_runner.png',
        projectSkills: ['C#', 'Unity'],
        projectLink: './work/bee_runner',
        projectType: 'game',
        projectDescription: 'Bee Runner Description'
    },
    {
        projectName: 'Zombie Strike',
        projectPhoto: './zombie_strike.png',
        projectSkills: ['C++', 'Unreal Engine'],
        projectLink: './work/zombie_strike',
        projectType: 'game',
        projectDescription: 'Zombie Strike Description'
    },
]

export default projects;