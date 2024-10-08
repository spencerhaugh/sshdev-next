import styles from './about.module.scss';
import SkillsComponent from "@/app/components/SkillsComponent/SkillsComponent";
import { BASE_DATA_URL } from "@/app/app.config";


interface AboutObject {
    title: string;
    content: string[];
}

async function getAboutData() {
    const response = await fetch(
        `${BASE_DATA_URL}/about`
    );

    return await response.json();
}

const AboutPage = async () => {
    const aboutData: AboutObject[] = await getAboutData();

    return (
        <>
            <h1 className={styles.h1}>
                // HELLO
            </h1>
            <div className={styles.about}>
                <div className={styles.aboutContainer}>
                    <div className={styles.aboutSkills}>
                        <SkillsComponent />
                    </div>
                </div>
                <article className={styles.aboutText}>
                    <section id="professional">
                        <h3>{aboutData[0].title}</h3>
                        {
                            aboutData[0].content.map((text, index) => (
                                    <p key={index}>{ text }</p>
                                )
                            )
                        }

                        <h3>{aboutData[1].title}</h3>
                        {
                            aboutData[1].content.map((text, index) => (
                                    <p key={index}>{ text }</p>
                                )
                            )
                        }
                    </section>
                    <section className={styles.personal}>
                        <h3>{aboutData[2].title}</h3>
                        {
                            aboutData[2].content.map((text, index) => (
                                    <p key={index}>{ text }</p>
                                )
                            )
                        }
                    </section>
                    <section className={styles.important}>
                        <h3>{aboutData[3].title}</h3>
                        {
                            aboutData[3].content.map((text, index) => (
                                    <p key={index}>{ text }</p>
                                )
                            )
                        }
                    </section>
                </article>
            </div>
        </>
    )
}

export default AboutPage;