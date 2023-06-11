'use client';

import React, { useContext } from 'react';
import Link from 'next/link';

import ThemeContext from '@/appLayer/context/ThemeContext';
import { COLOR_WHITE, COLOR_BLACK } from '@/shared/lib/theme/colors';
import GithubLink from '@/shared/ui/links/GithubLink/GithubLink';
import TwitterLink from '@/shared/ui/links/TwitterLink/TwitterLink';
import DiscordLink from '@/shared/ui/links/DiscordLink/DiscordLink';

import LayoutFooterStyles from './LayoutFooter.module.scss';

function LayoutFooter() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={LayoutFooterStyles.footer}>
      <div className={LayoutFooterStyles.container}>
        <ul className={LayoutFooterStyles.networks}>
          <li>
            <GithubLink
              link="https://github.com/cexles"
              color={theme === 'light' ? COLOR_BLACK : COLOR_WHITE}
              width="24"
              height="24"
            />
          </li>
          <li>
            <TwitterLink
              link="https://twitter.com/CexlesFinance"
              color={theme === 'light' ? COLOR_BLACK : COLOR_WHITE}
              width="24"
              height="24"
            />
          </li>
          <li>
            <DiscordLink
              link="https://discord.gg/Tv6ERdEU"
              color={theme === 'light' ? COLOR_BLACK : COLOR_WHITE}
              width="24"
              height="24"
            />
          </li>
        </ul>
      </div>
      <Link className={LayoutFooterStyles.link} href="/">
        Privacy policy
      </Link>
    </footer>
  );
}

export default LayoutFooter;
