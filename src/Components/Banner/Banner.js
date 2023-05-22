import Link from 'next/link';
import './Banner.scss';
import img from '@/assets/logo-kasa-full.png';
import Image from 'next/image';

function Banner() {
  return (
    <div className="Banner">
      <Image src={img} className='sizing-img' width={100} height={50}/>
      <nav className='Navbar'>
        <Link href="/">Accueil</Link>
        <Link href="/about">A propos</Link>
      </nav>
    </div>
  );
}

export default Banner;
