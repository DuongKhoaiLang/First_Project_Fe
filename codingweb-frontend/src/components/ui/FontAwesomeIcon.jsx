import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import * as Fontwesome from'@fortawesome/free-solid-svg-icons'

console.log(Fontwesome['faHouse']);


function Usericon({className,icon}){
    console.log(icon);
    
    return (
        <FontAwesomeIcon icon={Fontwesome[icon]} className={className == null ? '':className}/>
    )
}

export default Usericon