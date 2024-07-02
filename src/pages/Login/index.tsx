import { ChangeEvent, useEffect, useState } from "react"
import { Input,Space,Button,message } from 'antd';
import "./Login.css"
import initLoginBg from "./init.ts"
import './login.less'

const view = ()=>{

    useEffect(()=>{
        initLoginBg();
        window.onresize = function(){initLoginBg()};
    },[]);


    const [username,setUsername] = useState("")
    const usernameChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setUsername(e.target.value)
    }

    const [pwd,setPwd] = useState("")
    const pwdChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setPwd(e.target.value)
    }

    const [captcha,setCap] = useState("")
    const capChange =(e:ChangeEvent<HTMLInputElement>)=>{
        setCap(e.target.value)
    }


    const getLoginPara = ()=>{
        console.log(username,pwd,captcha)
    }


    return (
        <div className="loginPage">
            {/* 存放背景 */}
            <canvas id="canvas" style={{display:"block"}}></canvas>
            {/* 登录盒子 */}
            <div className="loginBox loginbox">
                {/* 标题部分 */}
                <div className= "title">
                    <h1>Backend Login Page</h1>
                    <p>Strive Everyday</p>
                </div>
                {/* 表单部分 */}
                <div className="form">
                    <Space direction="vertical" size="large" style={{ display: 'flex' }}>
                        <Input placeholder="Username" onChange={usernameChange} />
                        <Input.Password placeholder="Password" onChange={pwdChange}/>
                        {/* 验证码盒子 */}
                        <div className="captchaBox">
                            <Input placeholder="Verify Code" onChange={capChange} />
                            <div className="captchaImg" >
                                <img height="38"  alt="" />
                            </div>
                        </div>
                        <Button type="primary" className="loginBtn" block onClick={getLoginPara}>Login</Button>
                    </Space>
                </div>
            </div>
        </div>
    )
}
export default view