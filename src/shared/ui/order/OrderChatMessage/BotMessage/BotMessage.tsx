import { useContext } from 'react';
import { DateTime } from 'luxon';
import Image from 'next/image';

import ThemeContext from '@/appLayer/context/ThemeContext';

import BotMessageStyles from './BotMessage.module.scss';
import { Props } from './type';

function BotMessage({ children }: Props) {
  const { theme } = useContext(ThemeContext);

  return (
    <article className={BotMessageStyles.container}>
      <div className={BotMessageStyles.avatar}>
        <Image
          src={theme === 'light' ? '/icons/robot-dark.svg' : '/icons/robot.svg'}
          width={24}
          height={24}
          alt="Bot avatar"
        />
      </div>
      <div className={BotMessageStyles.message}>
        <p className={BotMessageStyles.time}>{DateTime.local().toFormat('hh:mm:ss')}</p>
        <p>{children}</p>
      </div>
    </article>
  );
}

export default BotMessage;
