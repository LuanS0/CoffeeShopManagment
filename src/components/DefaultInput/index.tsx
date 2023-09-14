import { Label, DefaultInput, ContainerInput } from "./style";

// DEFAULT NPUT COMPONENT
const Input = (props: Input) => {
    return (
        <>
            <ContainerInput>
                <Label htmlFor={props.id}>{props.label}</Label>
                <DefaultInput
                    type={props.type}
                    id={props.id}
                    placeholder={props.placeholder}
                />
            </ContainerInput>

        </>
    )
}

export default Input;