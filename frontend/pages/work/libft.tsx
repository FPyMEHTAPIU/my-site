import calculateContainerSize from "@/composables/calculateContainerSize";
import GithubBlock from "@/components/work/GithubBlock";
import FillSkills from "@/components/home/MainSkills";
import getCurrentProject from "@/composables/getCurrentProject";

const link:string = 'https://github.com/FPyMEHTAPIU/libft_updated'
const currentProject = getCurrentProject("libft");

const libft = () => {
    const {containerWidth, isMobile} = calculateContainerSize();
    const {MobileGithubBlock, TabletDesktopGithubBlock, GitHubButton} = GithubBlock(link);

    return (
        <main className="main-gap">
            {/*HEADER*/}
            {!isMobile && TabletDesktopGithubBlock()}
            <div className="work-content-block">
                <h1>libft</h1>
                <p className="body-default">
                    You must redo a set of functions from the libc. Your functions will have the same prototypes
                    and implement the same behaviors as the originals. They must comply with the way they are
                    defined in their man. The only difference will be their names. They will begin with the
                    ’ft_’ prefix. For instance, strlen becomes ft_strlen.
                </p>
                {FillSkills(currentProject.projectSkills, containerWidth, true)}
            </div>
            {/*CONTENT*/}
            <div className="work-content-block first-content-block">
                <h2>libft library</h2>
                <p className="body-default">
                    This project involves creating my own library with representations of standard functions
                    from the libc library and additional functions that are not in libc but are useful for
                    working with linked lists represented as structs. The library is built using a Makefile
                    from all the files in this project.
                    This library will be updated in the future.
                </p>
            </div>
            <div className="work-content-block">
                <h2>usage</h2>
                <p className="body-default">
                    To use this library, include "libft.h" in your code and link the created libft.a file when
                    compiling your program.
                    This library will be updated in the future.
                </p>
            </div>
            <div className="work-content-block last-block">
                <h2>addition features</h2>
                <ul>
                    <li className="list-dots"><p className="body-default">
                        representation of printf and fprintf;
                    </p></li>
                    <li className="list-dots"><p className="body-default">
                        get_next_line function returns a string until '\n' or '\0';
                    </p></li>
                    <li className="list-dots"><p className="body-default">
                        ft_abs function returns absolute value of integer;
                    </p></li>
                    <li className="list-dots"><p className="body-default">
                        ft_free_strs function frees a memory that was allocated.
                    </p></li>
                </ul>
            </div>
            {!isMobile && GitHubButton(link)}
            {isMobile ? MobileGithubBlock() : <></>}
        </main>
    )
}

export default libft;