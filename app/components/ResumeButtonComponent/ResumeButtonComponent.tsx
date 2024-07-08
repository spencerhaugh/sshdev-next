import {RESUME_LINK} from "@/app/layout";
import styles from './ResumeButton.module.scss';

const ResumeButton = () => {
    return (
        <a className={styles.BtnDownload} href={ RESUME_LINK } target="_blank" rel="noreferrer noopener">
            <button className={styles.resume}>Download Resume</button>
        </a>
    )
}

export default ResumeButton;