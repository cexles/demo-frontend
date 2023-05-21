import Link from 'next/link';

import LayoutFooter from '@/widgets/LayoutFooter/LayoutFooter';

import styles from './styles.module.scss';

function Index() {
  return (
    <>
      <main className={styles.main}>
        <h1 className={styles.title}>What we will do?</h1>
        <p className={styles.subtitle}>😉 Try one of our prompts!</p>
        <ul className={styles.links}>
          <li>
            <Link className={styles.link} href="order/dca">
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
    </>
  );
}

export default Index;
