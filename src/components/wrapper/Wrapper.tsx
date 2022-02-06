import s from './Wrapper.module.scss'
import {useAppSelector} from '../../store/hooks'


const Wrapper: React.FC = ({children}): JSX.Element => {
    const {isOpenDrawer} = useAppSelector(state => state.common)
    return <main className={s.body}>
    <div className={`${s.body__container} ${!isOpenDrawer ? s.active : ''}`}>
        {children}
        </div>
    </main>
}

export default Wrapper
