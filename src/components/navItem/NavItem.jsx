import './navItem.scss'
const NavItem = ({ name, onClick, current }) => {
    return (
        <button onClick={() => onClick()} className={`nav-item ${current ? 'current-tab' : ''}`}>
            {name}
        </button>
    )
}

export default NavItem