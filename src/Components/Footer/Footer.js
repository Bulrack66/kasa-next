import React from 'react';
import './Footer.scss';
import logoFooter from '../../assets/logo-footer.png';
import Image from 'next/image'

export default function Footer() {
  return (
    <footer>
      <div className='Footer'>
          <Image src={logoFooter} width={500} height={80} alt="logo Kasa footer"/>
          <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  )
}
