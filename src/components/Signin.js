import axios from "axios";
import base64 from "base-64";
import  cookies  from "react-cookies";
import swal from 'sweetalert';


function Signin() {
    const handleLogin = async (e) => {
        e.preventDefault();
        const user = {
            'username': e.target.username.value,
            'password': e.target.password.value,
        };
        const encoded = base64.encode(`${user.username}:${user.password}`);
        await axios.post(
            `${process.env.REACT_APP_HEROKU_URL}/signin`,
            {},
            {
                headers: {
                    'Authorization': `Basic ${encoded}`
                }
            }
        ).then ( (res) => {
            if (res.status === 200) {
                cookies.save('token', res.data.token);
                cookies.save('user_id', res.data.user.id);
                cookies.save('username', res.data.user.username);
                window.location.href = '/posts'
            }
        } ).catch( (err) => {
            swal('Invalid Login');
        }
        );
    };
    return ( 
        <div className="signin">
            <form onSubmit={handleLogin}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" id="password" />
                </div>
        
                <p>Don't have an account? <a href="/signup">Sign up now</a></p>
                <button type="submit" >SignIn</button>
            </form>
            </div>
    );
}

export default Signin;