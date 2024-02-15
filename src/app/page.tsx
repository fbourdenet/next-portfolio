import React from "react";
import * as SiIcons from "react-icons/si";

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
        <main className="dark:text-secondary-dark dark:bg-primary-dark bg-primary text-secondary font-custom flex h-full min-h-screen justify-center antialiased">
            <div className="flex w-11/12 flex-col gap-14 p-4 sm:w-10/12 md:w-8/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12">
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
                        ></Timeline>
                        <Timeline
                            year="2020"
                            diploma="diploma in computer networking"
                            school="iut nice côte d'azur"
                        ></Timeline>
                        <Timeline
                            year="2018"
                            diploma="high school diploma"
                            school="lycée amiral de grasse"
                        ></Timeline>
                    </Section>
                    <Section title="🎯 my skills">
                        <Skill subject="web">
                            <Popover title="react">
                                <SiIcons.SiReact className="h-5 w-5" />
                            </Popover>
                            <Popover title="vue.js">
                                <SiIcons.SiVuedotjs className="h-5 w-5" />
                            </Popover>
                            <Popover title="javascript">
                                <SiIcons.SiJavascript className="h-5 w-5" />
                            </Popover>
                            <Popover title="typescript">
                                <SiIcons.SiTypescript className="h-5 w-5 " />
                            </Popover>
                            <Popover title="node.js">
                                <SiIcons.SiNodedotjs className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="mobile">
                            <Popover title="react native">
                                <SiIcons.SiReact className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="software">
                            <Popover title="python">
                                <SiIcons.SiPython className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="database">
                            <Popover title="mongodb">
                                <SiIcons.SiMongodb className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="version control">
                            <Popover title="git">
                                <SiIcons.SiGit className="h-5 w-5" />
                            </Popover>
                            <Popover title="github">
                                <SiIcons.SiGithub className="h-5 w-5" />
                            </Popover>
                            <Popover title="bitbucket">
                                <SiIcons.SiBitbucket className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="web server">
                            <Popover title="nginx">
                                <SiIcons.SiNginx className="h-5 w-5" />
                            </Popover>
                            <Popover title="apache">
                                <SiIcons.SiApache className="h-5 w-5" />
                            </Popover>
                        </Skill>
                        <Skill subject="operating system">
                            <Popover title="windows">
                                <SiIcons.SiWindows className="h-5 w-5" />
                            </Popover>
                            <Popover title="linux">
                                <SiIcons.SiLinux className="h-5 w-5" />
                            </Popover>
                            <Popover title="macos">
                                <SiIcons.SiApple className="h-5 w-5" />
                            </Popover>
                        </Skill>
                    </Section>
                    <Section title="💻 my projects">
                        <p className="text-lg font-semibold">#1 fordle</p>
                        <p>
                            fordle is my own version of the popular game{" "}
                            <a
                                className="inline underline"
                                href="https://www.nytimes.com/games/wordle/index.html"
                            >
                                wordle
                            </a>
                            .
                        </p>
                        <Image
                            src="fordle.jpg"
                            alt="fordle image"
                            loading="lazy"
                        />
                        <p>
                            why? i found the game very fun and i wanted to try
                            to replicate it. the main purpose was to learn new
                            technologies such as vue.js.
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
                        <br />
                        <p className="text-lg font-semibold">#2 beport</p>
                        <p>
                            beport is a website used to export your bereal
                            photos.
                        </p>
                        <Image
                            src="beport.jpg"
                            alt="beport image"
                            loading="lazy"
                        />
                        <p>
                            why? i found myself using this app called bereal. it
                            became a part of my routine, and i started
                            accumulating a lot of pictures.
                        </p>
                        <p>
                            one day, i tried to export all my photos to store
                            them for later, but there was a problem – i couldn't
                            find a way to do it.
                        </p>
                        <p>
                            sure, the app allowed individual exports of the
                            photos, but here's the thing: each export came with
                            a watermark. that's why i created beport.
                        </p>
                    </Section>
                </Main>
                <Footer />
            </div>
        </main>
    );
}
