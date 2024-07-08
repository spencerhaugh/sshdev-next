
import styles from './contact.module.scss'
import classnames from "classnames";
import ResumeButton from "@/app/components/ResumeButtonComponent/ResumeButtonComponent";

const ContactPage = () => {
    return (
            <div className={styles.contact}>
                <h1>// LET'S TALK</h1>
                <div className={styles.contactContainer}>
                    <ul className={styles.ul}>
                        <li className={classnames(styles.slideInTl, styles.li)}><i className="fas fa-envelope-square fa-2x"></i>
                            <span className={styles.span}>spencer.haugh&#64;gmail.com</span>
                        </li>
                        <li className={classnames(styles.slideInBr, styles.li)}><i className="fab fa-linkedin fa-2x"></i> <span><a
                            href="https://linkedin.com/in/spencerhaugh" target="_blank">linkedin.com/in/spencerhaugh</a></span>
                        </li>
                        <li className={classnames(styles.slideInBl, styles.li)}><i className="fab fa-github-square fa-2x"></i> <span><a
                            href="https://github.com/spencerhaugh" target="_blank">github.com/spencerhaugh</a></span>
                        </li>
                    </ul>
                </div>
                <ResumeButton />
            </div>
    )
}

export default ContactPage;