import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as Fontwesome from'@fortawesome/free-solid-svg-icons'

function Usericon({className,icon}){
    
    return (
        <FontAwesomeIcon icon={Fontwesome[icon]} className={className == null ? '':className}/>
    )
}

export default Usericon