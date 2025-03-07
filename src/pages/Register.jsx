import { signUp } from "@/redux/actions/authAction";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleRegister = () => {
        if(email.trim() && password.trim()){
            dispatch(signUp(email,password))
            alert("SignUp successfull!")
            navigate("/")
        }
        else{
            alert("All credentials are required!")
        }
    }
    return (
        <Box
            p={10}
            display={"flex"}
            justifyContent={"center"}
        >
            <Flex
                width={"40%"}
                flexDirection={"column"}
                justifyContent={"center"}
                alignItems={"center"}
                p={4}
                borderRadius={10}
                gap={5}
                boxShadow={"md"}
                backgroundColor={"whiteAlpha.700"}
            >
                <Heading
                    color={"teal.600"}
                    size={"2xl"}
                    fontWeight={"bolder"}
                >Register</Heading>
                <Input
                    borderRadius={8}
                    borderWidth={"2px"}
                    fontFamily={"cursive"}
                    fontWeight={"bolder"}
                    backgroundColor={"gray.300"}
                    size={"lg"}
                    type="email" 
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    />
                <Input
                    borderRadius={8}
                    borderWidth={"2px"}
                    fontFamily={"cursive"}
                    fontWeight={"bolder"}
                    backgroundColor={"gray.300"}
                    size={"lg"}
                    type="password" 
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    />
                <Button
                    backgroundColor={"blue.400"}
                    fontWeight={"bolder"}
                    onClick={handleRegister}
                >Register</Button>
            </Flex>
        </Box>
    )
}