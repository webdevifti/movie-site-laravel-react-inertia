import { Link } from '@inertiajs/react'
import React from 'react'

const LinksTabContent = ({links}) => {
    const links_json = JSON.parse(links);
    
  return (
    <div>
        <table className='table table-dark'>
            <thead>
                <tr>
                    <th>Download</th>
                    <th>Quality</th>
                    <th>Lanuage</th>
                </tr>
            </thead>
            <tbody>
                {
                    links_json.map((link,i) => (
                        <tr key={i}>
                            <td><Link href={link.url}>Download</Link></td>
                            <td>{link.quality}</td>
                            <td>{link.language}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default LinksTabContent