import clsx from 'clsx';
import EditIconSrc from '../../assets/file-edit.png'
import DeleteIconSrc from '../../assets/trash.png'
import { Icon } from '../Icon';
import './styles.css';

const ListItem = ({ title, done, editAction, deleteAction, itemAction }) => {

    const handleDelete = (e) => {
        e.stopPropagation()
        deleteAction()
    }   

    return (
        <li
            className={clsx('list-item', {
                'list-item-done': done
            })}
            onClick={itemAction}
        >
            {title}
            <div onClick={(e) => {
                e.stopPropagation()
                editAction()
            }}>
                <Icon src={EditIconSrc} />
            </div>
            <div onClick={handleDelete}>
                <Icon src={DeleteIconSrc} />
            </div>
        </li>
    )
}

export default ListItem;