import React from 'react'
 import { Card } from 'antd';

const CollectionCard = ({collectionData}) => {
    return (
        <div>
            <div  style={{height : 230 ,width:320 }} className="collectionCard">
                
            <Card  title={collectionData.title}  extra={<a href="https://www.daraz.pk/wow/i/pk/landingpage/lp-collections?wh_weex=true&scm=1003.4.icms-zebra-5029921-2998851.OTHER_5530950738_2644365" target="_blank"> More</a>} style={{width: "80%" }}>
                 <p><img style={{ height : 80 ,width: 80 }} src={collectionData.img} alt="" /></p>
                   <p>{collectionData.link}</p>
    </Card>
            </div>
            

        </div>
    )
}

export default CollectionCard
