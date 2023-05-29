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
            <Link className={styles.link} href="order/take-profit">
              Take profits at high prices
              <span className={styles.arrow} />
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="order/stop-loss">
              Secure assets from market drops
              <span className={styles.arrow} />
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="order/trailing">
              Realize profits flexible with market moves
              <span className={styles.arrow} />
            </Link>
          </li>
          <li>
            <Link className={styles.link} href="order/dca">
              Automate regular asset buys
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
