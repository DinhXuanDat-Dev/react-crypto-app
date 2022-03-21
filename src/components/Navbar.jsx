import React from 'react'
import { Button, Menu, Avatar, Typography } from 'antd'
import { Link } from 'react-router-dom'
import { BulbOutlined, FundOutlined, HomeOutlined, MenuOutlined, MoneyCollectOutlined } from '@ant-design/icons'
import cryptoLogo from "../images/cryptocurrency.png"

const Navbar = () => {
    return (
        <div>
            <div className="navbar-container">
                <div className="navbar-logo">
                    <Avatar src={cryptoLogo} alt="crypto-logo" />
                    <Typography.Title className="logo-title" level={2}>
                        <Link to="/">Crypto Application</Link>
                    </Typography.Title>
                    {/* <Button className=""></Button> */}
                </div>
                <Menu className="menu-theme">
                    <Menu.Item icon={<HomeOutlined />}>
                        <Link to="/">Home</Link>
                    </Menu.Item>
                    <Menu.Item icon={<FundOutlined />}>
                        <Link to="/cryptocurrencies">Crypto Currency</Link>
                    </Menu.Item>
                    <Menu.Item icon={<MoneyCollectOutlined />}>
                        <Link to="/exchange">Exchange</Link>
                    </Menu.Item>
                    <Menu.Item icon={<BulbOutlined />}>
                        <Link to="/news">News</Link>
                    </Menu.Item>
                </Menu>
            </div>
        </div>
    )
}

export default Navbar
