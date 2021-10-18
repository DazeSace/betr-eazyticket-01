const Button = (props) => {

    const onClickButtonHandle = () => {
        console.log(props.text)
    }

    return (
        <div onClick={onClickButtonHandle}
             className={"button"}>
            <p className={"text-center"}>{props.icon}</p>
            <p className={"text-xl font-semibold"}>{props.text}</p>
        </div>
    )
}
export default Button
