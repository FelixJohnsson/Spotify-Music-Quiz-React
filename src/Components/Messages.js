const Messages = (props) => {


    return (
        <div className="message-div">
            <p><i>{props.display_name}</i>: {props.msg}</p>
        </div>

    )
}

export default Messages;