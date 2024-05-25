'use client';
import imageUrlBuilder from '@sanity/image-url';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { client } from '@/sanity/lib/client';
import { FETCH_HEADER } from '@/sanity/queries/header/fetch-header';
import { FETCH_HEADERResult } from '@/types/generated/sanity.types';

export interface IHeaderProps {}

export default function Header(_props: IHeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [headerData, setHeaderData] = useState<FETCH_HEADERResult>(null);
  const [logoUrl, setLogoUrl] = useState('');

  useEffect(() => {
    const fetchHeaderData = async () => {
      const headerDataResult = await client.fetch<FETCH_HEADERResult>(FETCH_HEADER);
      setHeaderData(headerDataResult);
      // FIXME: Remove this log after done with the example
      // eslint-disable-next-line no-console
      // console.log('headerDataResult: ', headerDataResult);
      const logoAsset = headerDataResult?.logo?.asset;
      if (logoAsset !== undefined) {
        const imageUrl = imageUrlBuilder(client).image(logoAsset._ref).url();
        setLogoUrl(imageUrl);
      } else {
        // eslint-disable-next-line no-console
        console.error('Logo asset is undefined');
      }
    };

    fetchHeaderData();
  }, []);
  // eslint-disable-next-line no-console
  console.log('headerData: ', headerData);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-1">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">{logoUrl && <img className="h-12 w-12 p-1" src={logoUrl} alt="Logo" />}</Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-center md:ml-auto md:space-x-8">
            {headerData?.navigation?.map(({ text, href }) => (
              <Link
                key={text}
                href={`${href?.toString()}`}
                className="text-gray-800 hover:text-gray-600 px-3 py-2 rounded-md text-sm font-medium"
              >
                {text}
              </Link>
            ))}
          </div>
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="bg-gray-100 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http:www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* TODO: make a seperate BELOW DIV */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {headerData?.navigation?.map(({ text, href }) => (
            <Link
              key={text}
              href={`${href?.toString()}`}
              className="text-gray-800 hover:text-gray-600 block px-3 py-2 rounded-md text-base font-medium"
            >
              {text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
