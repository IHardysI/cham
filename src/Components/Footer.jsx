import React from 'react'
import { UpCircleOutlined } from '@ant-design/icons'
import '../styles/Footer.scss'

function Footer() {
    return (
        <div className="footer">
            <a href="#up" className="footer-btn">
                <UpCircleOutlined className='footer-icon' />
            </a>
        </div>
    )
}

export default Footer