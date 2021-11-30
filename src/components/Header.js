import { FiHome } from "react-icons/fi";
import {Link} from "react-router-dom";

const Header = () => {

    return (
        <header className='header'>
            <Link to='/'>
                <div className='icon'>
                    <FiHome
                        size={40}
                        style={{ hei: '20px', cursor: 'pointer', }}
                        onClick={() => console.log('asassa')}
                    />
                </div>
            </Link>

            <h1>COOKBOOK</h1>

            <Link to='/'>
                <div className='icon'>
                    <FiHome
                        size={40}
                        style={{ hei: '20px', cursor: 'pointer' }}
                        onClick={() => console.log('asassa')}
                    />
                </div>
            </Link>

        </header>
    )
}

export default Header
