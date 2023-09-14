import { Button } from "./style";

// DEFAULT NPUT COMPONENT
const LoginSubmit = (props: LoginButton) => {
    return (
        <>
            <Button type={props.type}>
                Login
            </Button>
        </>
    )
}

export default LoginSubmit;