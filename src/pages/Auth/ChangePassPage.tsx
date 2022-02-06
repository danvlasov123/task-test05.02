import s from '../Auth/Style.module.scss'
import {MdOutlineClose} from 'react-icons/md'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { changePass } from '../../store/slices/commonSlice'
import { useAppDispatch } from '../../store/hooks'
const ChangePassPage: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
    const history = useNavigate()
    const [pass, setPass] = useState<string>('')
    const [pass2, setPass2] = useState<string>('')
    const [err, setErr] = useState<boolean>(false)
    const onSubmitClick = () => {
        if (pass === pass2 && pass.length > 7) {
            dispatch(changePass(pass))
            setErr(false)
            history('/')
        } else {
            setErr(true)
        }
    }

   return <section className={s.authForm}>
       <div className={s.authForm__header}>
            <h1>Change password for @admin</h1>
        </div>
        {err && <div className={s.authForm__error_block}>
            <span>
            You have entered up to 8 characters or the passwords do not match
            </span>
            <button onClick={() => setErr(false)}><MdOutlineClose/></button>
        </div>}
        <div className={s.authForm__body}>
            <label htmlFor="login">Password</label>
            <input type="password" id='login' value={pass} onChange={(e) => setPass(e.target.value)}/>
            <label htmlFor="pass">Confirm password</label>
            <input type="password" id="pass" value={pass2} onChange={(e) => setPass2(e.target.value)}/>
            <div className={s.authForm__body__note}>Make sure it's at least 8 characters</div>
            <button onClick={onSubmitClick}>Change password</button>
        </div>
   </section>
}

export default ChangePassPage