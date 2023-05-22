import './Section1.scss';
import background from '../../assets/section1.png';
import Image from 'next/image'

function Section1() {
  return (
    <div className="section1">
      <Image className='background1' src={background}/>
      <div className='title'><h1 className='title1'>Chez vous,</h1><h1 className='title2'>partout et ailleurs</h1></div>
    </div>
  );
}

export default Section1;
