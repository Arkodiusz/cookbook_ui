import {MdHome, MdInfo} from "react-icons/md";
import {Link} from "react-router-dom";

const Header = () => {

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

            <div style={{width: 80}}></div>

        </header>
    )
}

export default Header
