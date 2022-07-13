export const ChatLine = ({message}) => {
    return(
        <li>{message.name}: {message.content}</li>
    )
}