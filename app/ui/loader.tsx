import LogoSvg from "@/app/ui/svg/LogoSvg";
import TitleSvg from "@/app/ui/svg/TitleSvg";
import styles from "@/app/ui/loader.module.css";

export default function Loader() {
  return (
    <div className={styles.loader}>
      <LogoSvg
        className={styles.logo}
        topPartClassName={styles.logoTopPart}
        midPartClassName={styles.logoMidPart}
        botPartClassName={styles.logoBotPart}
      />
      <TitleSvg
        className={styles.title}
        kClassName={styles.titleK}
        eClassName={styles.titleE}
        dClassName={styles.titleD}
        o1ClassName={styles.titleO1}
        o2ClassName={styles.titleO2}
      />
    </div>
  );
}
