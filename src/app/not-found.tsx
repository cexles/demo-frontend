import LayoutHeader from '@/widgets/LayoutHeader/LayoutHeader';
import ErrorWrapper from '@/widgets/ErrorWrapper/ErrorWrapper';

import styles from './styles.module.scss';

function NotFound() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <LayoutHeader />
        <ErrorWrapper error={404} />
      </div>
    </div>
  );
}

export default NotFound;
