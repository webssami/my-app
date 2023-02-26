import React from 'react';
import { useNavigate } from 'react-router-dom';


function NotFound() {
    const navigate = useNavigate();
    return (
        <div style={{textAlign:'center'}}>
            <h2>해당 페이지를 찾을 수 없습니다.</h2>
            <div>
                <div style={{display:'inline-block',cursor:'pointer',color:'#f00'}} onClick={() => navigate('/')}>
                    메인페이지로 이동
                </div>
                
            </div>
        </div>
    )
}

export default NotFound;
