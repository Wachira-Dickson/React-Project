import PropTypes from './prop-type'
function UserGreeting(props){


            const welcomemessage = <h2 className="welcome_message">Welcome {props.Username}</h2> 
            const loginprompt = <h2 className="login_prompt">Please Log in to continue</h2>
        return( props.isLoggedIn ? welcomemessage: loginprompt);
}

UserGreeting.proptypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting