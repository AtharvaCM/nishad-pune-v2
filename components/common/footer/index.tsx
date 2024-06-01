'use client';

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
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__newsletter}>
          <h3 className={styles.footer__newsletterTitle}>Want us to email you with the latest blockbuster news?</h3>
          <div className={styles.footer__newsletterForm}>
            <input type="email" placeholder="nikola@tesla.com" className={styles.footer__newsletterInput} />
            <button className={styles.footer__newsletterButton}>Subscribe</button>
          </div>
        </div>

        <div className={styles.footer__grid}>
          <div className={styles.footer__column}>
            <p className={styles.footerText}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Praesentium natus quod eveniet aut perferendis distinctio iusto
              repudiandae, provident velit earum?
            </p>
            <div className={styles.footer__socialIcons}>
              <SocialIcon href="https://www.facebook.com/chandrashekhar.mahamuni" icon={<FaFacebookF size={'21px'} />} />
              <SocialIcon href="https://www.youtube.com/user/shekharmahamuni/featured" icon={<FaYoutube size={'21px'} />} />
            </div>
          </div>

          <div className={styles.footer__column}>
            <ul className={styles.footer__links}>
              {footerData?.usefulLinks?.map(({ _key, usefulLinkName, usefulLinkPath }) => (
                <li key={_key} className={styles.footer__linkItem}>
                  <Link className={styles.footer__link} href={`${usefulLinkPath?.toString()}`}>
                    {usefulLinkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footer__column}>
            <h3 className={styles.footer__title}>Address</h3>
            <p className={styles.footer__text}>{footerData?.address?.physicalAddress}</p>
            <p className={styles.footer__text}>{footerData?.address?.emailAddress}</p>
            <p className={styles.footer__text}>{footerData?.address?.contactNumber}</p>
          </div>

          <div className={styles.footer__column}>
            <h3 className={styles.footer__title}>Support</h3>
            <p className={styles.footer__text}>{footerData?.address?.physicalAddress}</p>
            <p className={styles.footer__text}>{footerData?.address?.emailAddress}</p>
            <p className={styles.footer__text}>{footerData?.address?.contactNumber}</p>
          </div>
        </div>
      </div>

      <div className={styles.footer__bottom}>
        <p className={styles.footer__bottomText}>
          &copy; {new Date().getFullYear()} {footerData?.copyrightObject?.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a href={href} className={styles.footer__socialLink}>
    {icon}
  </a>
);
