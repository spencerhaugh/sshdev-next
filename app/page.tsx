import HeroComponent from "@/app/components/HeroComponent/HeroComponent";
import styles from "./page.module.scss";
import ResumeButton from "@/app/components/ResumeButtonComponent/ResumeButtonComponent";

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
