import {React,useState} from 'react'
import './Dlogin.css'
export default function Dlogin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        window.location="/patient";
        if (email === 'ashgre@gmail.com' && password === 'Pass1') {        
            setErrorMessage('');
        } else if (email === 'rvsingh@gmail.com' && password === 'Pass2') {
            setErrorMessage('');
        } else {
            setErrorMessage('Invalid email or password');
        }
    };
  return (
    <div className='row logincont '>
        <form className='signin' onSubmit={handleSubmit}>
        <div className='logocont'>
        <h2>Login to your Account</h2>
        </div>
        <div className="mb-3 inputs">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" value={email} onChange={(event) => setEmail(event.target.value)} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        </div>
        <div className="mb-3 inputs">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" value={password} onChange={(event) => setPassword(event.target.value)}  className="form-control" id="exampleInputPassword1"/>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>

        {errorMessage && (
            <div className="alert alert-danger error-cont" role="alert">
            <svg className="bi flex error" role="img" aria-label="Danger:"><use xlinkHref="#exclamation-triangle-fill"/></svg>
            <div>{errorMessage}</div>
            </div>
        )}
        </form>
    </div>
    
  )
}
