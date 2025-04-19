import FillSkills from "@/components/home/MainSkills";
import calculateContainerSize from "@/composables/calculateContainerSize";
import SwiperContainer from "@/components/SwiperContainer";
import {useRef} from "react";
import GithubBlock from "@/components/work/GithubBlock";
import imageSlides from "@/components/work/ImageSlides";
import {SwiperRef} from "swiper/react";
import getCurrentProject from "@/composables/getCurrentProject";

const currentProject = getCurrentProject("push_swap");

const mobileImagesPushSwap1:string[] = [
    '/projects/push_swap/mobile/1.png',
    '/projects/push_swap/mobile/2.png'
]

const mobileImagesPushSwap2:string[] = [
    '/projects/push_swap/mobile/3.png',
    '/projects/push_swap/mobile/4.png',
    '/projects/push_swap/mobile/5.png',
    '/projects/push_swap/mobile/6.png'
]

const mobileImagesPushSwap3:string[] = [
    '/projects/push_swap/mobile/7.png',
    '/projects/push_swap/mobile/8.png',
    '/projects/push_swap/mobile/9.png',
    '/projects/push_swap/mobile/10.png',
    '/projects/push_swap/mobile/11.png'
]

const tabletImagesPushSwap1:string[] = [
    '/projects/push_swap/tablet/1.png',
    '/projects/push_swap/tablet/2.png'
]

const tabletImagesPushSwap2:string[] = [
    '/projects/push_swap/tablet/3.png',
    '/projects/push_swap/tablet/4.png',
    '/projects/push_swap/tablet/5.png',
    '/projects/push_swap/tablet/6.png'
]

const tabletImagesPushSwap3:string[] = [
    '/projects/push_swap/tablet/7.png',
    '/projects/push_swap/tablet/8.png',
    '/projects/push_swap/tablet/9.png',
    '/projects/push_swap/tablet/10.png',
    '/projects/push_swap/tablet/11.png'
]

const link:string = 'https://github.com/FPyMEHTAPIU/push_swap'

const push_swap = () => {
    const {SwiperDefault, SwiperImageDesktopVertical} = SwiperContainer();
    const {containerWidth, isMobile, isTablet, isDesktop1440} = calculateContainerSize();
    const swiperRef = useRef<SwiperRef>(null);
    const {MobileGithubBlock, TabletDesktopGithubBlock, GitHubButton} = GithubBlock(link);
    const {imageSlideVertical} = imageSlides();

    return (
        <main className="main-gap">
            {/*HEADER*/}
            {!isMobile && TabletDesktopGithubBlock()}
            <div className="work-content-block">
                <h1>push_swap</h1>
                <p className="body-default">
                    Write a program in C called push_swap which calculates and displays on the standard
                    output the smallest program, made of Push swap language instructions, that sorts the
                    integers received as arguments
                </p>
                {FillSkills(currentProject.skills, containerWidth, true)}
            </div>
            {/*CONTENT*/}
            <div className="work-content-block first-content-block">
                <h2>mandatory part</h2>
                <p className="body-default">
                    In this project, I implemented stack sorting logic using a temporary stack 'b'.
                    The stack should be sorted in the least possible number of actions.
                    Our arguments in the stack are integer numbers which we pass when running the program and
                    they can't repeat.
                </p>
                <p className="body-default">
                    The lowest number should be at the top of the first stack 'a', with numbers in ascending order.
                    We can only use the following restricted actions:
                </p>
                <ul>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">sa</span> - swap the top 2 elements in stack 'a'.
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">sb</span> - swap the top 2 elements in stack 'b'.
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">ss</span> - swap the top 2 elements in both stacks
                        at the same time.
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">pa</span> - push the top element from stack 'b' to stack 'a'.
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">pb</span> - push the top element from stack 'a' to stack 'b'.
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">ra</span> - rotate stack 'a' (the last element becomes the first).
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">rb</span> - rotate stack 'b' (the last element becomes the first).
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">rr</span> - rotate both stacks at the same time
                        (the last elements become the first).
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">rra</span> - rotate stack 'a' in the reverse direction
                        (the first element becomes the last).
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">rrb</span> - rotate stack 'b' in the reverse direction
                        (the first element becomes the last).
                    </p></li>
                    <li className="list-dots green"><p className="body-default">
                        <span className="green">rrr</span> - rotate both stacks in the reverse direction at
                        the same time (the first elements become the last).
                    </p></li>
                </ul>
                <p className="body-default">
                    I have a special solution for cases when we have only 3 or fewer numbers. Otherwise,
                    I transfer numbers from stack 'a' to stack 'b' until stack 'a' has 3 numbers remaining.
                </p>
                <p className="body-default">
                    I decided to pass numbers to stack 'b' to their suitable positions. This means
                    I create stack 'b' and pass numbers in descending order because stack 'a' should be in
                    ascending order, and I can only push the last element from the stack.
                </p>
                <p className="body-default">
                    To achieve the least possible number of instructions, I created a pre-calculation logic
                    that calculates the number of actions for each number.
                </p>
                <p className="body-default">
                    My calculation logic compares each element in stack 'a' with each element in stack 'b' and
                    finds a suitable position for it. It should be placed above the highest number in stack 'b' that
                    is less than the number from stack 'a'. It calculates how many times and in which direction
                    these stacks should be rotated. After this calculation, I compare the sum of each pair of
                    numbers and choose the lowest value, saving the index of that pair.
                </p>
            </div>
            {isMobile ? SwiperDefault(isMobile, isTablet, isDesktop1440, null, imageSlideVertical,
                    mobileImagesPushSwap1, null, swiperRef, 'vertical-first')
                :
                (isTablet ? SwiperImageDesktopVertical(isMobile, isTablet, null, imageSlideVertical,
                    tabletImagesPushSwap1, null, swiperRef, false, 'remove')
                    :
                    SwiperImageDesktopVertical(isMobile, isTablet, null, imageSlideVertical,
                        mobileImagesPushSwap1, null, swiperRef, false, 'remove'))
            }
            <div className="work-content-block">
                <p className="body-default">
                    After that, I perform the actual actions and push a number from stack 'a' to stack 'b'.
                    As I mentioned, I repeat these actions until stack 'a' has a size of 3. When the size of
                    stack 'a' equals 3, I check if the highest number is at the top of stack 'b'. If not,
                    I rotate this stack as many times as needed.
                </p>
                <p className="body-default">
                    Then I run the small_sort function for the remaining 3 numbers in stack 'a' (last pic).
                </p>
            </div>
            {isMobile ? SwiperDefault(isMobile, isTablet, isDesktop1440, null, imageSlideVertical,
                    mobileImagesPushSwap2, null, swiperRef, 'vertical-second')
                :
                (isTablet ? SwiperImageDesktopVertical(isMobile, isTablet, null, imageSlideVertical,
                        tabletImagesPushSwap2, null, swiperRef, true, 'arrow-second')
                    :
                    SwiperImageDesktopVertical(isMobile, isTablet, null, imageSlideVertical,
                        mobileImagesPushSwap2, null, swiperRef, true, 'arrow-second'))
            }
            <div className="work-content-block">
                <p className="body-default">
                    Finally, I push numbers from stack 'b' to stack 'a' to their suitable places.
                    They must be pushed above the lowest number in stack 'a' that is greater than a number from
                    stack 'b'. When the size of stack 'b' is 0, I check if the lowest element in stack 'a' is at
                    the top. If not, I rotate this stack until it is.
                </p>
                <p className="body-default">
                    At the end, I free all remaining memory.
                </p>
            </div>
            {isMobile ? SwiperDefault(isMobile, isTablet, isDesktop1440, null, imageSlideVertical,
                    mobileImagesPushSwap3, null, swiperRef, 'vertical-third')
                :
                (isTablet ? SwiperImageDesktopVertical(isMobile, isTablet, null, imageSlideVertical,
                        tabletImagesPushSwap3, null, swiperRef, true, 'arrow-third')
                    :
                    SwiperImageDesktopVertical(isMobile, isTablet, null, imageSlideVertical,
                        mobileImagesPushSwap3, null, swiperRef, true, 'arrow-third'))
            }
            {/*BONUS PART*/}
            <div className="work-content-block">
                <h2>bonus part</h2>
                <p className="body-default">
                    The bonus part requires implementing the checker_OS program. This program receives a list
                    of numbers (just like push_swap) and then a list of instructions one by one from the
                    standard input. It must check a few conditions:
                </p>
                <p className="body-default">
                    The stack 'a' is sorted after the list of instructions.
                    The stack 'b' is empty.
                </p>
                <p className="body-default">
                    The logic is quite simple: first, you convert your arguments (numbers) and put them in the stack.
                    Then, you receive the list of instructions, check each instruction (there can be invalid input
                    or instructions that don't exist or have extra characters), and perform those instructions on
                    the stack. After that, you just need to check if stack 'a' is sorted and print "OK" or "KO".
                    Of course, you should always remember to manage memory and free it in all possible situations.
                </p>
            </div>
            <div className="work-content-block last-block">
                <h2>my results</h2>
                <p className="body-default">
                    This logic earned me the highest grade in that project, with results that were below the lowest
                    threshold of instructions.
                </p>
                <div className="work-sub-block">
                    <p className="body-default green">100 numbers</p>
                    <img
                        className="horizontal-card grade-img" src="/projects/push_swap/test_100.jpg"
                        loading="lazy" alt="image"
                    />
                </div>
                <div className="work-sub-block">
                    <p className="body-default green">500 numbers</p>
                    <img
                        className="horizontal-card grade-img" src="/projects/push_swap/test_500.jpg"
                        style={{padding: '18px 16px'}} loading="lazy" alt="image"
                    />
                </div>
            </div>
            {!isMobile && GitHubButton(link)}
            {isMobile ? MobileGithubBlock() : <></>}
        </main>
    )
}

export default push_swap;