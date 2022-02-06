import s from './Default.module.scss'
import {ROUTES} from '../../data/routes'
const Default: React.FC = (): JSX.Element => {
const page = ROUTES.filter((item) => item.staticPath === window.location.pathname)[0]
return <section>
    <h2 className={s.title}>{page.title}</h2>
    <div className={s.content}>{page.content}</div>
</section>
}
export default Default