//import React from 'react'
import { FacebookLogo, InstagramLogo, LinkedinLogo } from '@phosphor-icons/react'

function Footer() {
 
  

  return (
    <>
        <div className="flex justify-center bg-lime-50 text-yellow-950">
          <div className="container flex flex-col items-center py-4">
            <p className='text-xl font-bold'>Oasis | Copyright: </p>
            <p className='text-lg'>Acesse nossas redes sociais</p>
            <div className='flex gap-2'>
              <LinkedinLogo size={48} weight='bold' />
              <InstagramLogo size={48} weight='bold' />
              <FacebookLogo size={48} weight='bold' />
            </div>
          </div>
        </div>

        <div className="flex justify-center border-t-2 py-2 ">
        <p className="paragraph me-1">Copyright © </p>
        <p className="paragraphBold me-1">Oásis |</p>
        <p className="paragraph me-1">Desenvolvido por</p>
        <p className="paragraphBold">
  <a href="https://www.linkedin.com/in/andersoncarlosdemoraisilva/"> Anderson Silva </a> • 
  <a href="https://www.linkedin.com/in/fernandasasso/"> Fernanda Sasso </a> • 
  <a href="https://www.linkedin.com/in/flavia-paiao/"> Flávia Paião </a> • 
  <a href="https://www.linkedin.com/in/guilhermerubrae/"> Guilherme Rubrae </a> • 
  <a href="https://www.linkedin.com/in/lauanegcsilva/"> Lauane Gonçalves </a> •
  <a href="https://www.linkedin.com/in/isabella-albuquerqueque-/"> Isabella Albuquerque </a>
</p>

      </div>
      </>
  )
}

export default Footer