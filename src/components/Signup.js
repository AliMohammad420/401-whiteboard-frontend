import axios from "axios";
import cookies from "react-cookies";
import swal from 'sweetalert';


function Signup () {
    const handleSignup = async ( e ) => {
        e.preventDefault(); 
            const user = {
                'username': e.target.username.value,
                'password': e.target.password.value,
                'email': e.target.email.value,
                'role': e.target.role.value
            };
            await axios.post(
                `${process.env.REACT_APP_HEROKU_URL}/signup`,
                user
            ).then( ( res ) => {
                if ( res.status === 200 ) {
                    cookies.save( 'token', res.data.token );
                    cookies.save( 'user_id', res.data.user.id );
                    cookies.save( 'username', res.data.user.username );
                    cookies.save( 'role', res.data.user.role );
                    window.location.href = '/posts';
                }
            } ).catch( ( err ) => {
                swal( 'Username or email already exists' );
            } );
        
    };
    return (
        <div className="signup">
            <form onSubmit={handleSignup}>
                <div className="form-group">
                    <label htmlFor="username">Username</label>
                    <input type="text" name="username" id="username" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" id="password" />
                </div>
                <div className="form-group">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type="text" name="confirmPassword" id="confirmPassword" />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" id="email" />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select name="role">
                        <option value="user" selected>USER</option>
                        <option value="admin">ADMIN</option>
                    </select>
                </div>
                <button type="submit" >SignUp</button>
            </form>
            <p>Already have an account? <a href="/signin">Sign in now</a></p>
        </div>
    );
}

export default Signup;