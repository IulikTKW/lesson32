import EditIconSrc from '../../assets/file-edit.png'
import { Icon } from '../Icon';
import './styles.css';

const ListItem = ({ title, done }) => {
    return (
        <li
            className={done ? 'listItem' : ''}
        >
            {title}
            <Icon src={EditIconSrc} />
        </li>
    )
}

export default ListItem;