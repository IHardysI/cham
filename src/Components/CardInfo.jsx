import React from 'react';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import coin from '../assets/coin1.png'
const { Meta } = Card;
const CardInfo = () => (
  <Card
    title="Card title"
    bordered={false}
    style={{
      width: 400,
      height: 200,
      background: "#2a2832",
      border: '#2a2832',
    }}
  >
    <p>Card content</p>
    <p>Card content</p>
    <p>Card content</p>
  </Card>
);
export default CardInfo;