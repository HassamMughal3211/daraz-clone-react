import { Button } from 'antd'
import { RightOutlined } from '@ant-design/icons';
import React from 'react'
import CollectionCard from '../card/CollectionCard'
import "./Collections.css"
import collectionData from "../../assests/js/collectionData.js";

const Collections = () => {
    return (
        <div className="CollectionContainer">
            <div className="topline">
                <h1>Collections  <Button type="text" icon={<RightOutlined />}>SHOP MORE</Button ></h1>
            </div>
            <div className="CollectionWrapper">
                {collectionData ?
                    collectionData.map((item) => <div className="collection1 collection"><CollectionCard collectionData={item} /></div>)
                    : ""}
            </div>
        </div>
    )
}

export default Collections
