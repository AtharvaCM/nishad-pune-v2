'use client';

import cx from 'classnames';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

import { client } from '@/sanity/lib/client';
import { FETCH_FOOTER } from '@/sanity/queries/footer/fetch-footer';
import { FETCH_FOOTERResult } from '@/types/generated/sanity.types';

import styles from './footer.module.scss';

export interface IFooterProps {}

interface SocialIconProps {
  href: string;
  icon: JSX.Element;
}

export default function Footer(_props: IFooterProps) {
  const [footerData, setFooterData] = useState<FETCH_FOOTERResult>();

  useEffect(() => {
    const fetchFooterData = async () => {
      const footerDataResult = await client.fetch<FETCH_FOOTERResult>(FETCH_FOOTER);
      setFooterData(footerDataResult);
    };

    fetchFooterData();
  }, []);

  return (
    <footer className={cx(styles['footer'])}>
      <div className={cx(styles['footer__container'])}>
        <div className={cx(styles['footer__newsletter'])}>
          <h3 className={cx(styles['footer__newsletter-title'])}>Want us to email you with the latest blockbuster news?</h3>
          <div className={cx(styles['footer__newsletter-form'])}>
            <input type="email" placeholder="nikola@tesla.com" className={cx(styles['footer__newsletter-input'])} />
            <button className={cx(styles['footer__newsletter-button'])}>Subscribe</button>
          </div>
        </div>

        <div className={cx(styles['footer__grid'])}>
          <div className={cx(styles['footer__column'])}>
            <p className={cx(styles['footer-text'])}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>
            <div className={cx(styles['footer__social-icons'])}>
              <SocialIcon href="https://www.facebook.com/chandrashekhar.mahamuni" icon={<FaFacebookF size={'21px'} />} />
              <SocialIcon href="https://www.youtube.com/user/shekharmahamuni/featured" icon={<FaYoutube size={'21px'} />} />
            </div>
          </div>

          <div className={cx(styles['footer__column'])}>
            <ul className={cx(styles['footer__links'])}>
              {footerData?.usefulLinks?.map(({ _key, usefulLinkName, usefulLinkPath }) => (
                <li key={_key} className={cx(styles['footer__link-item'])}>
                  <Link className={cx(styles['footer__link'])} href={`${usefulLinkPath?.toString()}`}>
                    {usefulLinkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={cx(styles['footer__column'])}>
            <h3 className={cx(styles['footer__title'])}>Address</h3>
            <p className={cx(styles['footer__text'])}>{footerData?.address?.physicalAddress}</p>
            <p className={cx(styles['footer__text'])}>{footerData?.address?.emailAddress}</p>
            <p className={cx(styles['footer__text'])}>{footerData?.address?.contactNumber}</p>
          </div>

          <div className={cx(styles['footer__column'])}>
            <h3 className={cx(styles['footer__title'])}>Support</h3>
            <p className={cx(styles['footer__text'])}>{footerData?.address?.physicalAddress}</p>
            <p className={cx(styles['footer__text'])}>{footerData?.address?.emailAddress}</p>
            <p className={cx(styles['footer__text'])}>{footerData?.address?.contactNumber}</p>
          </div>
        </div>
      </div>

      <div className={cx(styles['footer__bottom'])}>
        <p className={cx(styles['footer__bottom-text'])}>
          &copy; {new Date().getFullYear()} {footerData?.copyrightObject?.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a href={href} className={cx(styles['footer__social-link'])}>
    {icon}
  </a>
);
