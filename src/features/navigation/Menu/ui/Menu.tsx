'use client';

import React from 'react';

import NavLink from '@/shared/ui/links/NavLink/NavLink';

import MenuStyles from './Menu.module.scss';

function Menu() {
  return (
    <nav className={MenuStyles.nav}>
      <NavLink href="/" exact>
        Main
      </NavLink>
      <NavLink href="https://docs.cexles.finance/" target="_blank" exact>
        Documentation
      </NavLink>
    </nav>
  );
}

export default Menu;
