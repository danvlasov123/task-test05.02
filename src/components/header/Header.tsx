
import s from './Header.module.scss'
import { AiOutlineMenu } from 'react-icons/ai';
import {FaRegUserCircle} from 'react-icons/fa';
import {BsQuestionCircle} from 'react-icons/bs'
import {useAppDispatch} from '../../store/hooks'
import {toogleDrawer} from '../../store/slices/commonSlice'

const Header: React.FC = (): JSX.Element => {
    const dispatch = useAppDispatch()
        return <header className={s.header}>
     <div className={s.header__menu}>
        <div className={s.header__menu__open}>
             <AiOutlineMenu onClick={() => dispatch(toogleDrawer())}/>
        </div>
        <div className={s.header__menu__options}>
            <div>
                <BsQuestionCircle/>
                <span>Справка</span>
            </div>
            <div>
                <FaRegUserCircle/>
                <span>support@site.ua</span>
            </div>
        </div>
    </div>
</header>
}
export default Header