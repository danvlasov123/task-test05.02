import { NavLink } from "react-router-dom"
import {FiLogIn, FiSettings} from 'react-icons/fi'
import {GoGraph} from 'react-icons/go'
import {AiOutlineProfile, AiOutlineInfoCircle, AiOutlineLock} from 'react-icons/ai'
interface ICustomLinkPropsEl {
    link: string
    name: string
    type: string
}
interface ICustomLinkEl {
    el: ICustomLinkPropsEl
}
const CustomLink: React.FC<ICustomLinkEl> = ({el}) => {
    const renderSvg = (type: string) => {
        switch (type) {
            case 'auth': 
                 return <FiLogIn/>
            case 'graph': 
                 return <GoGraph/>
            case 'setting':
                return <FiSettings/>
            case 'profile': 
                return <AiOutlineProfile/>
            case 'faq': 
                return <AiOutlineInfoCircle/>
            case 'pass': 
                return <AiOutlineLock/>
        }
    }
    return <NavLink to={el.link} style={({isActive}) => ({
        color: isActive ? 'blue' : 'black',
        background: isActive ? '#e8f0fd' : 'inherit'
        })}>
        {renderSvg(el.type)}
        <span>
        {el.name}
        </span>
        </NavLink>
}

export default CustomLink