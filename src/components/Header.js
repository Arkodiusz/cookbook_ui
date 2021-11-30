import Button from "./Button";

const Header = ({onAdd, showAdd}) => {

    return (
        <header className='header'>
            <h1>COOKBOOK</h1>
            <Button
                color={showAdd ? 'red' : 'green'}
                text={showAdd ? 'CLOSE FORM' : 'ADD RECIPE'}
                onClick={onAdd}
                width={136}
            />
        </header>
    )
}

export default Header
