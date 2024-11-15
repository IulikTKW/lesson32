import { Button, Input } from "../index";

import './styles.css';

const ToDoForm = ({
    title,
    value,
    onChange,
    placeholder = 'Add to do',
    btnTitle,
    btnAction
}) => {
    return(
        <div className="formWrapper">
            <p>{title}</p>
            <Input value={value} onChange={onChange} placeholder={placeholder} />
            <Button onClick={btnAction} title={btnTitle} />
        </div>
    )
}

export default ToDoForm;