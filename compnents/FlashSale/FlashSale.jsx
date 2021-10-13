import React from 'react'
import CountDown from 'ant-design-pro/lib/CountDown';
import "./FlashSale.css"
import { Button } from 'antd';
import Cards from './../card/Cards';
import data from "../../assests/js/data";
const FlashSale = () => {
//    const targetTime = new Date().getTime() + 3900000;
    return (
    <div>
        <div className="flashsale">
       
       <div className="Heading"><h1>FlashSale</h1></div>

       <div className="timer">
           <h1>On Sale Now</h1>
           <h2>Ending In</h2> 
           {/* <div className="countdown"><CountDown style={{ fontSize: 30 }} target={targetTime} /></div> */}
            <Button className="Shopmore">Shop more</Button>
        </div>

       <div className="productcards">
           {data ?
            data.map((item) => <div className="carddesign"> <Cards data={item} /></div> )
            : ""}
          
       </div>
        </div>
        
    </div>
    )
}

export default FlashSale
