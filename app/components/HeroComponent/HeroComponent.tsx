import styles from './HeroComponent.module.scss';

const HeroComponent = () => {
    return (
        <div className={styles.bounceInTop}>
            <div className={styles.heroTitle}>Spencer Haugh</div>
        </div>
    )
}

export default HeroComponent;