import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Link} from 'react-router-dom';
import {starGoogleLogin, startLoginEmailPassword } from '../../actions/auth';
import { useForm } from '../../hooks/useForm';

export const LoginScreen = () => {

    const dispatch = useDispatch();
    const {loading} = useSelector(state => state.ui)

    const [ formValues, handleInputChange ]= useForm({
        email: 'admin@admin.com',
        password: '123456'
    });

    const { email, password } = formValues;
    const handleLogin = (e) => {
        e.preventDefault();
        dispatch(startLoginEmailPassword(email, password));
    }

    const handleGoogleLogin= ()=>{
        dispatch(starGoogleLogin());
    }

    return (
        <>
            <h3 className="auth__title">Login</h3>

            <form
                onSubmit={handleLogin}
                className="auth__form animate__animated animate__fadeIn animate__faster"
                >

                <input
                    type="text"
                    placeholder="Email"
                    name="email"
                    className="auth__input"
                    autoComplete="off"
                    value={email}
                    onChange={handleInputChange}
                />

                <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="auth__input"
                    value={password}
                    onChange={handleInputChange}
                />

                <button
                    type="submit"
                    className="auth__button btn btn-primary "
                    disabled= { loading }
                >
                    Login
                </button>


                <div className="auth__social-networks">
                    <p>Login with social networks</p>

                <div className="auth__social-buttons">
                    <div
                        className="auth__social-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="auth__social-button-icon-wrapper">
                            <img className="auth__social-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>

                    <div
                        className="auth__social-btn"
                        onClick={ handleGoogleLogin }
                    >
                        <div className="auth__social-button-icon-wrapper">
                            <img className="auth__social-icon" src="https://upload.wikimedia.org/wikipedia/commons/4/4a/GitHub_Mark.png" alt="google button" />
                        </div>
                        <p className="btn-text">
                            <b>Sign in with github</b>
                        </p>
                    </div>

                </div>
                </div>

                <Link 
                    to ="/auth/register"
                    className="link"
                >
                    Create new account
                </Link>

            </form>
        </>
    )
}
