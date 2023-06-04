'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import MobileNavLinkStyles from './MobileNavLink.module.scss';
import { Props } from './type';

function MobileNavLink({ href, exact = false, target, children }: Props) {
  const [isActive, setIsActive] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    if (exact) {
      setIsActive(pathname === href);
    } else {
      setIsActive(pathname.startsWith(href));
    }
  }, [exact, href, pathname]);

  return (
    <Link
      className={isActive ? MobileNavLinkStyles.navLink : MobileNavLinkStyles.navLinkActive}
      href={href}
      target={target}
    >
      {children}
    </Link>
  );
}

export default MobileNavLink;
