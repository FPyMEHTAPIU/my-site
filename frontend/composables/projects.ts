export type ProjectCardData = {
    name: string;
    photo: string;
    skills: string[];
    link: string;
    type: string;
    description: string;
    location: 'internal' | 'external';
}

const projects:ProjectCardData[] = [
    {
        name: 'Portfolio website',
        photo: '/Irina.jpg',
        skills: ['TypeScript', 'Vue.js', 'Nuxt', 'SCSS', 'Figma'],
        link: 'https://iryna-naumova.vercel.app/',
        type: 'Web',
        description: 'A UX/UI designer\'s portfolio website.',
        location: 'external'
    },
    {
        name: 'Hero Fan',
        photo: '/HF.jpg',
        skills: ['JavaScript', 'React.js', 'Next.js', 'Node.js'],
        link: './work/hero_fan',
        type: 'Web',
        description: 'A full-stack (Marvel) Hero Fan webpage.',
        location: 'internal'
    },
    {
        name: 'SMTH',
        photo: '/SMTH.jpg',
        skills: ['TypeScript', 'React Native'],
        link: './work/smth',
        type: 'Web',
        description: 'A mobile app designed to make job searching and hiring stress-free.',
        location: 'internal'
    },
    {
        name: 'FdF',
        photo: '/FdF.png',
        skills: ['C', 'Makefile', 'MLX42 Library'],
        link: './work/fdf',
        type: 'Software',
        description: 'A graphics project that represents a 2D map of numbers in 3D.',
        location: 'internal'
    },
    {
        name: 'push_swap',
        photo: '/push_swap.jpg',
        skills: ['C', 'Makefile'],
        link: './work/push_swap',
        type: 'Software',
        description: 'A sorting algorithm that sorts a stack using another one with pre-calculation logic.',
        location: 'internal'
    },
    {
        name: 'libft',
        photo: '/libft.jpg',
        skills: ['C', 'Makefile'],
        link: './work/libft',
        type: 'Software',
        description: 'A custom library that reimplements many standard C functions, along with linked lists and more.',
        location: 'internal'
    },
    {
        name: 'Bee Runner',
        photo: '/projects/bee_runner/bee_runner.png',
        skills: ['C#', 'Unity'],
        link: './work/bee_runner',
        type: 'Game',
        description: 'An endless runner game created in Unity using C#.',
        location: 'internal'
    },
    {
        name: 'Zombie Strike',
        photo: '/projects/zombie_strike/zombie_strike.jpg',
        skills: ['C++', 'Unreal Engine'],
        link: './work/zombie_strike',
        type: 'Game',
        description: 'A top-down auto-shooter game created in Unreal Engine 5 using C++.',
        location: 'internal'
    },
]

export default projects;