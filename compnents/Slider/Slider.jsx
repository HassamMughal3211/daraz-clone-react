import React from 'react'
import { Carousel, Button } from 'antd';
import { RightCircleOutlined } from '@ant-design/icons';
import "./Slider.css" 
import CategoryBar from '../Categorybar/CategoryBar';

const Slider = () => {
    return (
        <div className="SliderContainer" style={{position:'relative'}}>
           <div style={ {position:'absolute', marginLeft:'5vw',zIndex:'1'}}>
                <CategoryBar />

            </div>
            <div className="carousel">
            <Carousel autoplay dotPosition='top'	>
    <div>
      <h3  className="slider slider1">1</h3>
    </div>
    <div>
      <h3  className="slider slider2">2</h3>
    </div>
    <div>
      <h3  className="slider slider3">3</h3>
    </div>
    <div>
      <h3  className="slider slider4">4</h3>
    </div>
  </Carousel>

            </div>
           <div className="buttons">
           
           <Button className="button" type="primary" shape="round" icon={<RightCircleOutlined />} size="large">Daraz Mall</Button>
           <Button className="button" type="primary" shape="round" icon={<RightCircleOutlined />} size="large">dMart</Button>
           <Button className="button" type="primary" shape="round" icon={<RightCircleOutlined />} size="large">Fashion & Beauty</Button>
        </div>
        </div>
    )
};

export default Slider;
