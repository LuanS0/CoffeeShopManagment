import Input from "../../components/DefaultInput";
import Logo from "../../assets/logo-coffeeshop.png";
import { Container, ContainerImage, Content, FormSignIn, Image, WelcomeText } from "./style";
import LoginSubmit from "../../components/LoginButton";

const SignIn = () => {
    return (
        <>
            <Container>
                <Content>
                    <ContainerImage>
                        <Image src={Logo} />
                    </ContainerImage>
                    <WelcomeText>CoffeeShop - Managment</WelcomeText>
                    <FormSignIn>
                        <Input
                            id="login"
                            placeholder="Email"
                        />
                        <Input
                            id="senha"
                            placeholder="Password"
                            type="password"
                        />
                        <LoginSubmit type='submit'/>
                    </FormSignIn>
                </Content>
            </Container>
        </>
    )
}

export default SignIn;