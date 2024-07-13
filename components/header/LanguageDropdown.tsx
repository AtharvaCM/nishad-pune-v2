'use client';
import { usePathname, useRouter } from 'next/navigation';
import { FC, useEffect, useState } from 'react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

interface ILanguageDropdownProps {}

type Language = {
  value: string;
  label: string;
  countryCode: string;
};

const languages: Language[] = [
  {
    value: 'en',
    label: 'EN',
    countryCode: 'us',
  },
  {
    value: 'mr',
    label: 'MR',
    countryCode: 'in',
  },
];

const LanguageDropdown: FC<ILanguageDropdownProps> = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<Language>(languages[0]);
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (value: string) => {
    const newLanguage = languages.find((lang) => lang.value === value);

    if (newLanguage) {
      setSelectedLanguage(newLanguage);
      const currentPath = window.location.pathname;
      const newPath = currentPath.replace(`/${selectedLanguage.value}`, `/${newLanguage.value}`);
      router.push(newPath);
    }
  };

  useEffect(() => {
    const currentLang = pathname.split('/')[1];
    const initialLanguage = languages.find((lang) => lang.value === currentLang) || languages[0];
    setSelectedLanguage(initialLanguage);
  }, [pathname]);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size={'default'}>
          {selectedLanguage ? (
            <>
              <span className={`fi fi-${selectedLanguage.countryCode} fis mr-1`}></span>
              {selectedLanguage.label}
            </>
          ) : (
            <>Set Language</>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Language</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={selectedLanguage.value} onValueChange={handleLanguageChange}>
          {languages.map((language) => (
            <DropdownMenuRadioItem key={language.value} value={language.value}>
              {language.label}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LanguageDropdown;
