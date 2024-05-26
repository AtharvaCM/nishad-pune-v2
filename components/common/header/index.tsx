'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

import { client } from '@/sanity/lib/client';
import { FETCH_HEADER } from '@/sanity/queries/header/fetch-header';
import { FETCH_HEADERResult } from '@/types/generated/sanity.types';

import { fetchImageURL } from './../../../utils/functions/fetchImageURL';

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
              {isOpen ? <FaBars /> : <FaTimes />}
            </button>
          </div>
        </div>
      </div>

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
