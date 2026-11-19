import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button';
import { MdMenuOpen } from "react-icons/md";
import { IoIosMenu } from "react-icons/io";
const Header = () => {
  return (
    <div>
        <header className='d-flex align-item-center'>
            <div className='container-fluid d-flex align-items-center'>
              <div className='row '>
                {/* logo wraper============== */}
                <div className="col-xs-3">
                  <Link to="/" className='logo'> H</Link>
                </div>
                <Button>sd</Button>
              </div>
            </div>
        </header>
    </div>
  )
}

export default Header