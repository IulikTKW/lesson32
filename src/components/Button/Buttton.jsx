
const Button = ({title, onClick, type}) => {
    return <button onClick={onClick} disabled={true}>{title}</button>
}

export default Button