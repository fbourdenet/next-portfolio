import React from "react";

import {
    SiApache,
    SiApple,
    SiBitbucket,
    SiGit,
    SiGithub,
    SiJavascript,
    SiLinux,
    SiMongodb,
    SiNginx,
    SiNodedotjs,
    SiPython,
    SiReact,
    SiTypescript,
    SiVuedotjs,
    SiWindows
} from "react-icons/si";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Popover from "@/components/Popover";
import Section from "@/components/Section";
import Skill from "@/components/Skill";
import Timeline from "@/components/Timeline";
import Main from "@/components/Main";
import Image from "@/components/Image";

export default function Home() {
    return (
        <main className="dark:text-secondary-dark dark:bg-primary-dark bg-primary text-secondary flex h-full min-h-screen justify-center antialiased">
            <div className="flex w-11/12 flex-col gap-14 p-4 sm:w-9/12 md:w-7/12 lg:w-5/12 xl:w-[38%] 2xl:w-4/12">
                <Header />
                <Main>
                    <Section title="🙋‍♂️ about me">
                        <p>
                            hey 👋 ! my name is florian, i'm 23 years old, and
                            i'm a french full-stack developer based in nice,
                            france. 👀
                        </p>

                        <p>
                            my journey into the world of development began back
                            in 2018 during high school, where i started creating
                            web pages using html and css. what started as a
                            hobby quickly turned into a passion for software
                            development. 💻
                        </p>

                        <p>
                            today, i work as a full-stack developer in an
                            innovative startup located in sophia antipolis. my
                            job is very stimulating and challenges me on a daily
                            basis. 🚀
                        </p>
                    </Section>
                    <Section title="🎓 my education">
                        <Timeline
                            year="2023"
                            diploma="engineer's degree in computer science"
                            school="polytech nice sophia"
                        />
                        <Timeline
                            year="2020"
                            diploma="diploma in computer networking"
                            school="iut nice côte d'azur"
                        />
                        <Timeline
                            year="2018"
                            diploma="high school diploma"
                            school="lycée amiral de grasse"
                        />
                    </Section>
                    <Section title="🎯 my skills">
                        <Skill subject="web">
                            <Popover title="react">
                                <SiReact className="h-5 w-5" />
                            </Popover>
                            <Popover title="vue.js">
                                <SiVuedotjs className="h-5 w-5" />
                            </Popover>
                            <Popover title="javascript">
                                <SiJavascript className="h-5 w-5" />
                            </Popover>
                            <Popover title="typescript">
                                <SiTypescript className="h-5 w-5 " />
                            </Popover>
                            <Popover title="node.js">
                                <SiNodedotjs className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="mobile">
                            <Popover title="react native">
                                <SiReact className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="software">
                            <Popover title="python">
                                <SiPython className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="database">
                            <Popover title="mongodb">
                                <SiMongodb className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="version control">
                            <Popover title="git">
                                <SiGit className="h-5 w-5" />
                            </Popover>
                            <Popover title="github">
                                <SiGithub className="h-5 w-5" />
                            </Popover>
                            <Popover title="bitbucket">
                                <SiBitbucket className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="web server">
                            <Popover title="nginx">
                                <SiNginx className="h-5 w-5" />
                            </Popover>
                            <Popover title="apache">
                                <SiApache className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="operating system">
                            <Popover title="windows">
                                <SiWindows className="h-5 w-5" />
                            </Popover>
                            <Popover title="linux">
                                <SiLinux className="h-5 w-5" />
                            </Popover>
                            <Popover title="macos">
                                <SiApple className="h-5 w-5" />
                            </Popover>
                        </Skill>
                    </Section>
                    <Section title="💻 my projects">
                        <p className="text-lg font-semibold">#1 wordle</p>
                        <p>
                            wordle is a popular word game made by Josh Wardle.
                        </p>
                        <p>
                            the game itself is very simple. you have to guess a
                            five-letter word within a limited number of
                            attempts. after each guess, the game shows you which
                            letters are in the correct position (in green),
                            which letters are in the wrong position (yellow),
                            and which letters are not part of the word at all
                            (grey).
                        </p>
                        <Image
                            src="wordle.jpg"
                            alt="wordle image"
                            loading="lazy"
                            caption="Screenshot of my own implementation of the wordle game"
                        />
                        <p>
                            i wanted to recreate this game because i find it very fun to play
                            and it can be used for some algorithm work.
                        </p>
                        <br />
                        <p className="text-lg font-semibold">#2 beport</p>
                        <p>
                            beport is a website used to export your photos took with the bereal
                            app.
                        </p>
                        <p>
                            bereal is a social media app designed to offer a more authentic and
                            spontaneous way for users to share their lives with friends.
                            once a day, at a random time, bereal users receive a notification
                            asking them to take a photo.
                        </p>
                        <Image
                            src="beport.jpg"
                            alt="beport image"
                            loading="lazy"
                            caption="Screenshot of the BePort web application"
                        />
                        <p>
                            i wanted to make this web app in the first place because
                            i needed a way to export my photos to keep them in case bereal doesn't exist anymore.
                        </p>
                        <p>
                            i had two problems with the bereal app :
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;• i could export the photos, but only one by one
                            <br />
                            &nbsp;&nbsp;&nbsp;&nbsp;• the exported photos have a bereal watermark at the bottom
                        </p>
                    </Section>
                </Main>
                <Footer />
            </div>
        </main>
    );
}
