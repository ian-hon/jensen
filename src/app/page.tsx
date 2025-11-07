import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    return (
        <div className={styles.parent}>
            <Image className={styles.background} src='/waves.jpg' alt='' height='500' width='500' />
            <div className={styles.container}>
                <Image className={styles.jensen} src="/jensen.png" alt="" height="500" width="500" />
                <div className={styles.description}>
                    <h1>hi im jensen</h1>
                    <h2>i like guitars</h2>
                    <h2>i m learning to code 😛</h2>
                </div>
            </div>
        </div>
    );
}
