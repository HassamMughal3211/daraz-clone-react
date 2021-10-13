import React from 'react'
import { Card } from 'antd';

const { Meta } = Card;

const Cards = ({data}) => {
    return (
        <div>
             <Card
    hoverable
    style={{minHeight:"300px", width: 240 }}
    cover={<img height="250px" alt="example" src={data.img} />}
  >
    <Meta title={data.title} description={data.link} />
  </Card>
        </div>
    )
}

export default Cards
