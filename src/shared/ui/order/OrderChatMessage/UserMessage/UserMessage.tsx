import { useContext } from 'react';
import ThemeContext from '@/appLayer/context/ThemeContext';
import { DateTime } from 'luxon';
import Image from 'next/image';

import UserMessageStyles from './UserMessage.module.scss';
import { Props } from './type';

function UserMessage({ message }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <article className={UserMessageStyles.container}>
      <div className={UserMessageStyles.message}>
        <p className={UserMessageStyles.time}>{DateTime.local().toFormat('hh:mm:ss')}</p>
        <p>{message}</p>
      </div>
      <div className={UserMessageStyles.avatar}>
        <Image
          src={theme === 'light' ? '/icons/smiley-dark.svg' : '/icons/smiley.svg'}
          width={24}
          height={24}
          alt="User avatar"
        />
      </div>
    </article>
  );
}

export default UserMessage;
