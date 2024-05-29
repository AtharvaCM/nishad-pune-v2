'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { FaFacebookF, FaYoutube } from 'react-icons/fa';

import { client } from '@/sanity/lib/client';
import { FETCH_FOOTER } from '@/sanity/queries/footer/fetch-footer';
import { FETCH_FOOTERResult } from '@/types/generated/sanity.types';

export interface IFooterProps {}

interface SocialIconProps {
  href: string;
  icon: JSX.Element;
}

export default function Footer(_props: IFooterProps) {
  const [footerData, setFooterData] = useState<FETCH_FOOTERResult>();

  useEffect(() => {
    const fetchHeaderData = async () => {
      const footerDataResult = await client.fetch<FETCH_FOOTERResult>(FETCH_FOOTER);
      setFooterData(footerDataResult);
    };

    fetchHeaderData();
  }, []);

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col justify-between items-center md:items-center">
            <h1 className="text-bold mb-4">Company Logo </h1>
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
        <p className="text-sm">&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, icon }) => (
  <a href={href} className="hover:text-blue-500">
    {icon}
  </a>
);
