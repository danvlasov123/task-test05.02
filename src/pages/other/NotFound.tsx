import s from './Style.module.scss'
const NotFound: React.FC = (): JSX.Element => {
    return <section className={s.section}>
        <h2>Oops... Not Found :(<br/><span>404</span><br/></h2>
    </section>
}
export default NotFound