import '@/app/globals.css';

import { draftMode } from 'next/headers';
import { PropsWithChildren } from 'react';

import VisualEditing from '@/components/VisualEditing';

export default function RootLayout({ children }: Readonly<PropsWithChildren>) {
  return (
    <html lang="en">
      <body className="m-0 p-0">
        <div>{children}</div>
        {draftMode().isEnabled && <VisualEditing />}
      </body>
    </html>
  );
}
