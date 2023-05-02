import React from 'react'

const Login = () => {
    return (
        <div>
            <form>
                <label htmlFor="username">Username</label>
                <input id="username" autoComplete="off" type="text" />
                <label htmlFor="password">Password</label>
                <input id="password" autoComplete="off" type="password" />
                <button type="submit" className="btn">sign in</button>
                <button type="submit" className="btn">Login</button>
            </form>
        </div>
    )
}

export default Login