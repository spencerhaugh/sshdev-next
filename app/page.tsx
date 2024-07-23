import HeroComponent from "@/app/components/HeroComponent/HeroComponent";
import styles from "./page.module.scss";
import ResumeButton from "@/app/components/ResumeButtonComponent/ResumeButtonComponent";

export const RESUME_LINK = "https://drive.google.com/file/d/1-AifT8L92THPadpXjZqazPAygQGKalEu/view?usp=sharing";
export const BASE_DATA_URL="https://portfolio-server-production-c31f.up.railway.app";

const HomePage = () => {
    return(
        <>
            <HeroComponent/>
            <h2 className={styles.homeTitle}>// Software Engineer</h2>
            <h3 className={styles.homeSubtitle}>// Let's get radical</h3>
            <ResumeButton />
        </>
    )
}

export default HomePage;
