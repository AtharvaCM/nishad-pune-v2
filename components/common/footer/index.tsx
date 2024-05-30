'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

import { client } from '@/sanity/lib/client';
import { FETCH_FOOTER } from '@/sanity/queries/footer/fetch-footer';
import { FETCH_HEADER } from '@/sanity/queries/header/fetch-header';
import { FETCH_FOOTERResult, FETCH_HEADERResult } from '@/types/generated/sanity.types';

import { fetchImageURL } from './../../../utils/functions/fetchImageURL';

export interface IFooterProps {}

interface SocialIconProps {
  href: string;
  icon: JSX.Element;
}

export default function Footer(_props: IFooterProps) {
  const [footerData, setFooterData] = useState<FETCH_FOOTERResult>();
  const [logoUrl, setLogoUrl] = useState('');
  const [headerData, setHeaderData] = useState<FETCH_HEADERResult>(null);

  useEffect(() => {
    const fetchFooterData = async () => {
      const footerDataResult = await client.fetch<FETCH_FOOTERResult>(FETCH_FOOTER);
      setFooterData(footerDataResult);
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

    // eslint-disable-next-line no-console
    console.log('headerDataResult: ', headerData);

    fetchFooterData();
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-between items-center md:items-center">
            <Link href="/">{logoUrl && <img className="h-12 w-12 p-1 mb-4" src={logoUrl} alt="Logo" />}</Link>

            <ul className="text-center">
              {footerData?.usefulLinks?.map(({ _key, usefulLinkName, usefulLinkPath }) => (
                <li key={_key} className="mb-2 mt-1">
                  <Link className="hover:underline" href={`${usefulLinkPath?.toString()}`}>
                    {usefulLinkName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-center">
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="mb-2">{footerData?.address?.physicalAddress}</p>
            <p className="mb-2">{footerData?.address?.emailAddress}</p>
            <p>{footerData?.address?.contactNumber}</p>
          </div>

          <div className="flex flex-col items-center md:items-center">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-6">
              <SocialIcon href="https://www.facebook.com/chandrashekhar.mahamuni" icon={<FaFacebookF size={'25px'} />} />
              <SocialIcon href="https://www.youtube.com/user/shekharmahamuni/featured" icon={<FaYoutube size={'25px'} />} />
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700 py-4 text-center">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} {footerData?.copyrightObject?.companyName}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a href={href} className="hover:text-blue-500">
    {icon}
  </a>
);
