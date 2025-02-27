import React, { useState } from 'react';
import { CopyFilled } from '@ant-design/icons';
import { Menu } from 'antd';
import { NavLink } from 'react-router-dom';

const items = [
    {
      label: (
        <NavLink to={'/'}>Slider 1</NavLink>
      ),
      key: 'slider1',
      icon: <CopyFilled />,
    },
    {
      label: (
        <NavLink to={'/slider2'}>Slider 2</NavLink>
      ),
      key: 'slider2',
      icon: <CopyFilled />,
    },
    {
      label: (
        <NavLink to={'/slider3'}>Slider 3</NavLink>
      ),
      key: 'slider3',
      icon: <CopyFilled />,
    },
    {
      label: (
        <NavLink to={'/slider4'}>Slider 4</NavLink>
      ),
      key: 'slider4',
      icon: <CopyFilled />,
    },
    {
      label: (
        <NavLink to={'/slider5'}>Slider 5</NavLink>
      ),
      key: 'slider5',
      icon: <CopyFilled />,
    },
    
  ];



  const MenuComp = () => {
    const [current, setCurrent] = useState('slider1');
    const onClick = (e) => {
      console.log('click ', e);
      setCurrent(e.key);
    };
    return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
  };
  export default MenuComp;