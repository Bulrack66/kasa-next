
import Link from 'next/link';
import './Error.scss'

export default function Error() {
  return (
    <div className='Error'>
        <h1 className='error-404'>404</h1>
        <p>Oups! La page que vous demandez n'existe pas.</p>
        <Link className='link' href='/'>Retourner sur la page d’accueil</Link>
    </div>
  )
}
