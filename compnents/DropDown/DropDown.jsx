import React from 'react'
import { Menu, Dropdown, Button, message, Space, Tooltip } from 'antd';
import { DownOutlined, UserOutlined ,ShoppingCartOutlined,LogoutOutlined} from '@ant-design/icons';
import { useHistory } from "react-router-dom";
import { signout } from './../../redux/auth/authactions';
import { useDispatch } from 'react-redux';



function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
  
}





const DropDown = (props) => {
  const dispatch = useDispatch()
  var history = useHistory();

  function handleClick() {
    history.push("/profile");
  }
  
  function handleClickSignOut() { 
    signout(dispatch);   
    history.push("/");
  }
  const menu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="1" onClick={handleClick} icon={<UserOutlined />}>
      Profile
      </Menu.Item>
      <Menu.Item key="2" icon={<ShoppingCartOutlined />}>
        View Cart
      </Menu.Item>
      <Menu.Item key="3"  onClick={handleClickSignOut} icon={<LogoutOutlined />}>
        Sign Out
      </Menu.Item>
    </Menu>
  );

  return (
        <div>
            <Space wrap>
      <Dropdown.Button overlay={menu} placement="bottomCenter" icon={<DownOutlined /> }>
        {props.userDetails.auth ? <span>{props.userDetails.auth.fullname}</span> : "user"}
          {/* {userName(props)} */}
    
    </Dropdown.Button>
    </Space>


        </div>
    )
}



export default DropDown