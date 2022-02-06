
import { useState } from 'react'
import s from './Style.module.scss'
import {MdOutlineClose} from 'react-icons/md'
import { useAppSelector, useAppDispatch } from '../../store/hooks'
import { Link, useNavigate } from 'react-router-dom'
import { onAuth, onSignOut , onAuthCorrect} from '../../store/slices/commonSlice'
const AuthPage: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const history = useNavigate()
    const {auth, isChangedPass, isAuth} = useAppSelector(state => state.common)

    const [isChangedPassword, setIsChangedPassword] = useState<boolean>(isChangedPass)
    const onClickSignOut = () => {
        dispatch(onSignOut())
    }
    const onClickSignIn = () => {
        if (auth.login === inputLogin && auth.pass === inputPass) {
            setIsShowForgot(true)
            setError(false)
            dispatch(onAuthCorrect())
            if (isChangedPass) {
                history('/dashboard')
                dispatch(onAuth(true))
            }
        } else {
            setError(true)
            setIsShowForgot(false)
            setIsChangedPassword(false)

        }
    }
    const [error, setError] = useState<boolean>(false)
    const [isShowForgot, setIsShowForgot] = useState<boolean>(false)
    const [inputLogin, setInputLogin] = useState<string>('')
    const [inputPass, setInputPass] = useState<string>('')
    return <section className={s.authForm}>
        <div className={s.authForm__header}>
            <h1>Sign {!isAuth ? 'in' : 'out'} to Site</h1>
        </div>
        {error && <div className={s.authForm__error_block}>
            <span>
            Имя пользователя или пароль введены не верно
            </span>
            <button onClick={() => setError(false)}><MdOutlineClose/></button>
        </div>}
        {isChangedPassword && <div className={`${s.authForm__error_block} ${s.authForm__successfully_block}`}>
            <span>
            Password changed successfully
            </span>
            <button onClick={() => setIsChangedPassword(false)}><MdOutlineClose/></button>
        </div>}
        <div className={s.authForm__body}>
        {!isAuth ? 
        <>
            <label htmlFor="login">Username or login</label>
            <input type="text" id='login' value={inputLogin} onChange={(e) => setInputLogin(e.target.value)}/>
            <label htmlFor="pass">Password</label>
            <input type="password" id="pass" value={inputPass} onChange={(e) => setInputPass(e.target.value)}/>
            <button onClick={onClickSignIn}>Sign in</button>
        </>
            : <>
            <h2 className={s.authForm__body__text_signout}>Are you sure you want to log out of your account?</h2>
            <button onClick={onClickSignOut}>Sign out</button>
            </>
        }
        </div> 
        {isShowForgot && <div className={s.authForm__forgot}>
            Forgot password?<Link to='/pass'>{' '}Change password</Link>.
        </div>}
    </section>
}

export default AuthPage