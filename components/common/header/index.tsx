'use client';
import cx from 'classnames';
import Image from 'next/image';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { client } from '@/sanity/lib/client';
import { FETCH_HEADER } from '@/sanity/queries/header/fetch-header';
import { FETCH_HEADERResult } from '@/types/generated/sanity.types';

import { fetchImageURL } from '@/utils/functions/fetchImageURL';
import styles from './header.module.scss';

export interface IHeaderProps {}

export default function Header(_props: IHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [headerData, setHeaderData] = useState<FETCH_HEADERResult>(null);
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchHeaderData = async () => {
      const headerDataResult = await client.fetch<FETCH_HEADERResult>(FETCH_HEADER);
      setHeaderData(headerDataResult);
      const logoAsset = headerDataResult?.logo?.asset;
      if (logoAsset !== undefined) {
        const imageUrl = fetchImageURL(logoAsset._ref);
        setLogoUrl(imageUrl);
      } else {
        // TODO: SET BACKUP local IMAGE WITH setLogoUrl(imageUrl);
      }
    };

    fetchHeaderData();
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={cx(styles['d-container'])}>
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
              <Link key={text} href={`${href?.toString()}`} className={cx(styles['d-container__navigation-link'])}>
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
              {isOpen ? <FaBars /> : <FaTimes />}
            </button>
          </div>
        </div>
      </div>
      
      <div className={cx(styles['d-container__mobile-menu'], { [styles['d-container__mobile-menu--open']]: isOpen })} id="mobile-menu">
        <div className={cx(styles['d-container__mobile-menu-content'])}>
          {headerData?.navigation?.map(({ text, href }) => (
            <Link key={text} href={`${href?.toString()}`} className={cx(styles['d-container__mobile-menu-link'])}>
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
