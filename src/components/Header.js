import { MdHome } from "react-icons/md";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header className='header'>
            <Link to='/'>
                <div className='icon'>
                    <MdHome size={35}/>
                </div>
            </Link>

            <h1>COOKBOOK</h1>

            <div></div>

        </header>
    )
}

export default Header
