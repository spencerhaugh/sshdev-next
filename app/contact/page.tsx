import styles from './contact.module.scss'
import classnames from "classnames";
import ResumeButton from "@/app/components/ResumeButtonComponent/ResumeButtonComponent";

interface ContactObject {
  method: string,
  icon: string,
  link: string,
}

async function getData() {
    const response = await fetch(
        'https://portfolio-server-production-c31f.up.railway.app/contact'
      );
    return await response.json();
}

const ContactPage = async () => {
    const contactData: ContactObject[] = await getData();

    return (
        <div className={styles.contact}>
            <h1>// LET'S TALK</h1>
            <div className={styles.contactContainer}>
                <ul className={styles.ul}>
                    <li className={classnames(styles.slideInTl, styles.li)}><i
                        className="fas fa-envelope-square fa-2x"></i>
                        <span className={styles.span}>{ contactData[0].link }</span>
                    </li>
                    <li className={classnames(styles.slideInBr, styles.li)}><i className="fab fa-linkedin fa-2x"></i>
                        <span><a
                            href={ contactData[1].link } target="_blank">linkedin.com/in/spencerhaugh</a></span>
                    </li>
                    <li className={classnames(styles.slideInBl, styles.li)}><i
                        className="fab fa-github-square fa-2x"></i> <span><a
                        href={ contactData[2].link } target="_blank">github.com/spencerhaugh</a></span>
                    </li>
                </ul>
            </div>
            <ResumeButton/>
        </div>
    )
}

export default ContactPage;