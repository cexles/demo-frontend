import Link from 'next/link';
import LayoutHeader from '@/widgets/LayoutHeader/LayoutHeader';

import LayoutFooter from '@/widgets/LayoutFooter/LayoutFooter';
import styles from './styles.module.scss';

function Index() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <LayoutHeader />
        <main className={styles.main}>
          <h1 className={styles.title}>What we will do?</h1>
          <p className={styles.subtitle}>😉 Try one of our prompts!</p>
          <ul className={styles.links}>
            <li>
              <Link className={styles.link} href="/">
                Swap something
                <span className={styles.arrow} />
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/">
                Buy some asset in recurring way
                <span className={styles.arrow} />
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/">
                Sell if my asset going to the moon
                <span className={styles.arrow} />
              </Link>
            </li>
            <li>
              <Link className={styles.link} href="/">
                Safe my funds if asset going low
                <span className={styles.arrow} />
              </Link>
            </li>
          </ul>
        </main>
        <LayoutFooter />
      </div>
    </div>
  );
}

export default Index;
