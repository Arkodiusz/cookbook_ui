import {MdAddCircle, MdHome, MdInfo} from "react-icons/md";
import {Link, useLocation} from "react-router-dom";

const Header = () => {
    const location = useLocation();

    return (
        <header className='header'>
            <div style={{width: 80, display: 'flex', justifyContent: 'space-between'}}>
                <Link to='/'>
                    <div className='icon'>
                        <MdHome
                            size={35}
                        />
                    </div>
                </Link>
                <Link to='/about'>
                    <div className='icon'>
                        <MdInfo
                            size={35}
                        />
                    </div>
                </Link>
            </div>

            <h1>COOKBOOK</h1>

            {location.pathname === '/' ? (
                <div style={{width: 80, display: 'flex', justifyContent: 'right'}}>
                    <Link to='/form'>
                        <div className='icon'>
                            <MdAddCircle
                                size={35}
                            />
                        </div>
                    </Link>
                </div>
            ) : (
                <div style={{width: 80}}></div>
            )}
        </header>
    )
}

export default Header
