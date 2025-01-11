import './Header.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars} from "@fortawesome/free-solid-svg-icons";

function Header() {

    return (
        <>

            <h1>Route Kosten Calculator </h1>
            <FontAwesomeIcon icon={faBars} />
        </>
    );

}

export default Header;
