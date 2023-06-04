'use client';

import React, { useContext } from 'react';

import ThemeContext from '@/appLayer/context/ThemeContext';
import BotMessage from '@/shared/ui/order/OrderChatMessage/BotMessage/BotMessage';
import TwitterLink from '@/shared/ui/links/TwitterLink/TwitterLink';
import GithubLink from '@/shared/ui/links/GithubLink/GithubLink';
import { COLOR_BLACK, COLOR_WHITE } from '@/shared/lib/theme/colors';

import CreateOrderChatStyles from './CreateOrderChat.module.scss';

function CreateOrderChat() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={CreateOrderChatStyles.dialog}>
      <BotMessage>
        <p>
          Unfortunately, the chatbot is still under active development. We will be happy to
          demonstrate the new way of user experience soon. Follow our accounts for updates.
        </p>
        <div className={CreateOrderChatStyles.social}>
          <div className={CreateOrderChatStyles.socialIcon}>
            <GithubLink
              link="https://github.com/cexles"
              color={theme === 'light' ? COLOR_BLACK : COLOR_WHITE}
              width="48"
              height="48"
            />
          </div>
          <div className={CreateOrderChatStyles.socialIcon}>
            <TwitterLink
              link="https://twitter.com/CexlesFinance"
              color={theme === 'light' ? COLOR_BLACK : COLOR_WHITE}
              width="48"
              height="48"
            />
          </div>
        </div>
      </BotMessage>
    </div>
  );
}

export default CreateOrderChat;
