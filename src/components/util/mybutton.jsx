import React from 'react';
import { Button } from 'antd';
import { Link } from 'react-router-dom';

const MyButton = ({ text,linktext, type = "primary", size ,icon, onClick, disabled = false }) => {
  return (
  <Link to={`/${linktext}` }>
    <Button 
   className='my-6'
    style={{marginRight: '10px',height: '56px',width: '208px',marginTop:"48px",background: 'linear-gradient(to left, #1A50FF, #D96FF8)'}}
      type={type} 
      size={size} 
      onClick={onClick} 
      disabled={disabled}
    >
  
   <div className='flex justify-between gap-4 items-center'>
   {text}
   {icon}
   </div>

    </Button>
    </Link>
  );
};

export default MyButton;
