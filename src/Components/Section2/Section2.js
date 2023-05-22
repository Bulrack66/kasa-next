import './Section2.scss';
import background from '@/assets/section2.png';
import Image from 'next/image';

function Section2() {
  return (
    <div className="section2">
      <Image className='background2' src={background}/>
    </div>
  );
}

export default Section2;
