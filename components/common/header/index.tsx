'use client';
import { Text } from '@radix-ui/themes';
import { useWindowScroll } from '@uidotdev/usehooks';
import cx from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { FETCH_HEADERResult } from '@/types/generated/sanity.types';
import { fetchImageURL } from '@/utils/functions/fetchImageURL';

import styles from './header.module.scss';

export interface IHeaderProps {
  headerData: FETCH_HEADERResult;
}

export default function Header(props: IHeaderProps) {
  const { headerData } = props;

  const [isOpen, setIsOpen] = useState(false);

  const pathname = usePathname();
  const [{ y }] = useWindowScroll();
  const enableFixedPos = pathname === '/';
  const enableBgTransparent = enableFixedPos ? y !== null && y < 100 && !isOpen : false;

  const logoAsset = headerData?.logo?.asset;
  const logoUrl = logoAsset && fetchImageURL(logoAsset._ref);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={cx(styles['d-container'], {
        [styles['d-container--enable-fixed-pos']]: enableFixedPos,
        [styles['d-container--enable-bg-transparent']]: enableBgTransparent,
      })}
    >
      <div className={cx(styles['d-container__inner'])}>
        <div className={cx(styles['d-container__content'])}>
          <div className={cx(styles['d-container__logo-container'])}>
            <div className={cx(styles['d-container__logo'])}>
              <Link href="/">
                {logoUrl && <Image className={cx(styles['d-container__logo-img'])} src={logoUrl} alt="Logo" width={48} height={48} />}
              </Link>
            </div>
          </div>
          <div className={cx(styles['d-container__navigation'])}>
            {headerData?.navigation?.map(({ text, href }) => (
              <Link
                key={text}
                href={`${href?.toString()}`}
                className={cx(styles['d-container__navigation-link'], {
                  [styles['d-container__navigation-link--active']]: pathname === href,
                })}
              >
                {text}
              </Link>
            ))}
          </div>
          <div className={cx(styles['d-container__menu-button-container'])}>
            <button
              onClick={toggleMenu}
              type="button"
              className={cx(styles['d-container__menu-button'])}
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
      </div>

      <div className={cx(styles['d-container__mobile-menu'], { [styles['d-container__mobile-menu--open']]: isOpen })} id="mobile-menu">
        <div className={cx(styles['d-container__mobile-menu-content'])}>
          {headerData?.navigation?.map(({ text, href }) => (
            <Link key={text} href={`${href?.toString()}`} className={cx(styles['d-container__mobile-menu-link'])}>
              <Text as="p" weight={'medium'}>
                {text}
              </Text>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
