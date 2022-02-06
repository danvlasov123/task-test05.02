import s from './Style.module.scss'
import { Link } from 'react-router-dom'
import {BsArrowLeft} from 'react-icons/bs'
const NotAuth: React.FC = (): JSX.Element => {
return <div className={s.container}>
    <Link to='/' className={s.container__link}><BsArrowLeft/>Авторизация</Link>
    <h1>Login to your account!</h1>
    </div>
}

export default NotAuth