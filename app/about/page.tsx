import styles from './about.module.scss';

const AboutPage = () => {
    return (
        <>
            <h1 className={styles.h1}>
                // HELLO
            </h1>
            <div className={styles.about}>

                <div className={styles.aboutContainer}>
                    <div className={styles.aboutSkills}>
                        skills here!
                    </div>
                </div>

                <article className={styles.aboutText}>
                    <section id="professional">
                        <h3>I'm Spencer.</h3>
                        <p>
                            I am a frontend-focused software developer with a background in marketing and
                            customer experience, and I'm currently working as a full-stack software engineer
                            working on a production app with an established start-up.
                            I am a Javascript developer with strengths in design, creativity,
                            cross-discipline collaboration, and communication.
                        </p>
                        <p>
                            I love building fun and functional web apps, and making sure the web continues to be
                            a place that is accessible for everyone. I am certified in several Adobe design programs,
                            and love to collaborate across disciplines and teams (with UX designers, PMs, and others)
                            to build amazing sites that customers love to use.
                        </p>

                        <h3>What I'm Looking For In A Company</h3>
                        <p>
                            I'm looking for a healthy, vibrant environment where I can do my best work! I'm looking
                            for a company that values diversity, creativity, and where I can make an impact with my
                            development skills in a positive, supportive, and growth-oriented atmosphere.
                        </p>
                        <p>
                            I am looking for a company culture the places trust in it's teams, encourages and
                            supports them to do their best work with a balance of guidance, mentorship, and autonomy.
                        </p>
                        <p>
                            I am excited to be a long term part of that company's success and growth!
                        </p>
                        <p>
                            I fell in love with programming because of the endless learning. I am a person
                            who loves adding new skills to my knowledge base, and with code there is no end to
                            knowledge! I am excited to learn from great companies and great mentors.
                        </p>
                        <p>
                            Next on my personal learning agenda is a deeper dive into Angular and Typescript.
                        </p>
                        <p>
                            Oh, I'm also looking for a space to fail and make mistakes. A love of learning implicitly
                            comes with a healthy amount of mistakes! I aim to grow into the best developer I can
                            possibly be for you, and the biggest successes are certainly bred from failure.
                        </p>
                    </section>

                    <section className={styles.personal}>
                        <h3>About Spencer, The Human</h3>
                        <p>
                            But that's all business, and I'm a lot more than that! My favorite hobby outside of the
                            office is cycling. I've raced bicycles for years, and I enjoy it so much that
                            I have a fairly popular podcast about it, (The Slow Ride Podcast). I really
                            enjoy creating #content.
                        </p>
                        <p>I think the years of dedication to training and racing bikes, helps me tremendously
                            as a developer. As a bike racer I spend a lot of time training solo, putting in the work
                            to be my best. But, cycling is a team sport, and on race day it's knowing how to
                            work effectively with the whole team that allows us to achieve our goals.
                            Communication is critical.
                            Showing up prepared is critical.
                            Being willing to help the team is critical.
                        </p>
                        <p>
                            I also have a 1988 VW Vanagon that I am trying to restore, I don't know a
                            lot about cars but I'm trying to learn. This process also reflects in my
                            developer life; there are always new and interesting problems with a vintage van,
                            and knowing what my resources are, and analyzing the issue to break it down
                            into manageable pieces is the best way to get yourself through it
                            and back on the road!
                        </p>
                        <p>
                            Lastly, I'm still trying to get better at play guitar, but I'm only about as
                            good as I was at 15. Still, I really enjoy it! Dedication, and not giving
                            up on goals, even if they are challenging is a trait I cherish.
                        </p>
                        <p>
                            Feel free to ask me about any of these interests, I love to talk about them!
                        </p>
                    </section>

                    <section className={styles.important}>
                        <h3>Also:</h3>
                        <p>I also <strong>*strongly*</strong> believe in equality and dismantling problematic
                            systemic infrastructure such as racism, sexism, homophobia, transphobia, and the
                            toxic environments that enable them.
                            I think that this is necessary and important information to put
                            here on the site, as any company I agree to work for will absolutely
                            need to share those beliefs.
                        </p>
                    </section>
                </article>
            </div>

        </>
    )
}

export default AboutPage;