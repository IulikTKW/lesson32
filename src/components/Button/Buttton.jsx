import './styles.css'

const btnType = {
    primary: 'button-primary',
    secondary: 'button-secondary',
}

const Button = ({title, onClick, type}) => {
    return <button onClick={onClick} className={btnType[type]}>{title}</button>
}

export default Button