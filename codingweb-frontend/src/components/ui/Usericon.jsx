import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from'@fortawesome/free-solid-svg-icons'


function Usericon({className}){
    return (
        <FontAwesomeIcon icon={faUser} className={className}/>
    )
}

export default Usericon