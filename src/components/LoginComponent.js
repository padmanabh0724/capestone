import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/userSlice'
import LoginServices from './services/LoginServices'

function LoginComponent(props) {
    const [username,setUsername]=useState('');
    const [password,setPassword]=useState('');
    const [errmsg,setErrmsg]=useState('');
    const [backendpassword,setBackEndPassword]=useState(false)

    const dispatch=useDispatch();

    const usernameChangeHandler=(event)=>{
        setUsername(event.target.value);
        setErrmsg('');
    }
    const passwordChangeHandler=(event)=>{
        setPassword(event.target.value);
        setErrmsg('');
    }
    const next=(e)=>{
        e.preventDefault();
        LoginServices.getCustodianByPassword(password).then((res)=>
        {setBackEndPassword(res.data.id)
        console.log(res.data.id)}).catch((error)=>{window.alert("Invalid password")})
        if(backendpassword===password){
            dispatch(login({
                username:username,
                password:password,
                loggedIn:true
            }));
        props.history.push('/exchange');
        }
        else
        setErrmsg("Credentials Invalid");
    }
        return (
            <div>
                <div className="container">
                    <div className="row">
                    <span className="row_span"><h3>Welcome to Exchange Application</h3></span>
                        <div id="loginbody" className="card col-md-6 offset-md-3 offset-md-3" >
                            <h3 className="text-center">Login</h3>
                            <h5 className="text-center text-danger">{errmsg}</h5>
                            <div className="card-body">    
                                <form onSubmit={next}>
                                    <div className="form-group">
                                        <label>Custodian Name </label>
                                        <input placeholder="enter name" name="username" className="form-control"
                                        value={username} onChange={usernameChangeHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label>Id </label>
                                        <input type="password" placeholder="enter Id" name="password" className="form-control"
                                        value={password} onChange={passwordChangeHandler}/>
                                    </div>
                                    <button type="submit" className="btn btn-success">Login</button>
                                </form>
                            </div>
                          
                        </div>
                    </div>
                </div>
            </div>
        );
}
export default LoginComponent;