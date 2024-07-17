import { Link } from '@inertiajs/react'
import React from 'react'

const Footer = () => {
  return (
    <div className='footer text-center mt-2 mb-2'>
        <Link href='#'>Terms & Condition</Link>
        <Link href='#'>Privacy & Policy</Link>
        <br />
        2024 &copy; All right reserved
    </div>
  )
}

export default Footer