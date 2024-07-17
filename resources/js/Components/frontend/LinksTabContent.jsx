import { Link } from '@inertiajs/react'
import React from 'react'

const LinksTabContent = (props) => {
    const links = props.links
  return (
    <div>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Download</th>
                    <th>Quality</th>
                    <th>Lanuage</th>
                    <th>Size</th>
                </tr>
            </thead>
            <tbody>
                {
                    links.map((link,i) => (
                        <tr key={i}>
                            <td><Link href={link.download_url}>Download</Link></td>
                            <td>{link.quality}</td>
                            <td>{link.language}</td>
                            <td>{link.size}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default LinksTabContent