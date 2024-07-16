import Image from 'next/image';

// logo path is skipped in middleware
const LogoIcon = () => <Image src={'/logo.png'} alt="Logo" width={32} height={32} />;

export default LogoIcon;
