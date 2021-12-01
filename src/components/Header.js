import {MdAddCircle, MdHome} from "react-icons/md";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <header className='header'>
            <Link to='/'>
                <div className='icon'>
                    <MdHome
                        size={35}
                    />
                </div>
            </Link>

            <h1>COOKBOOK</h1>

            {location.pathname === '/' ? (
                <Link to='/form'>
                    <div className='icon'>
                        <MdAddCircle
                            size={35}
                        />
                    </div>
                </Link>
            ) : (
                <div style={{width: 35}}></div>
            )}
        </header>
    )
}

export default Header
