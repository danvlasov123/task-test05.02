import s from './Drawer.module.scss'
import {useAppSelector} from '../../store/hooks'
import CustomLink from './CustomLink'
import {MENU} from '../../data/menu'
const Drawer: React.FC = (): JSX.Element => {
    const {isOpenDrawer} = useAppSelector(state => state.common)
    return <div className={`${s.drawer} ${!isOpenDrawer ? s.active : ''}`}>
        <div className={s.drawer__container}>
        {MENU.map((el, key) => {
            return <CustomLink el={el} key={key}/>
        })}
        </div>
    </div>
}

export default Drawer