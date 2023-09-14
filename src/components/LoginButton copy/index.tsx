import { Label, DefaultInput } from "./style";

// DEFAULT NPUT COMPONENT
const Input = (props: Input) => {
    return (
        <>
            <Label htmlFor={props.id}>{props.label}</Label>
            <DefaultInput
                type="text"
                id={props.id}
                placeholder={props.placeholder}
            />
        </>
    )
}

export default Input;