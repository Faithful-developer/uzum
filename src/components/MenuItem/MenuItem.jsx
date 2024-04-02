import './MenuItem.scss'

const MenuItem = ({imgLink, itemName, itemPrice}) => {
    return (
        <li className="menu-list-item">
            <img src={imgLink} alt=""/>
            <div className="menu-list-item-context">
                <p>{itemName}</p>
                <p>{itemPrice}</p>
            </div>
        </li>
    )
}

export default MenuItem
