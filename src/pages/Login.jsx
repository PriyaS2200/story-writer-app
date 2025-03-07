import { login } from "@/redux/actions/authAction";
import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react"
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const handleLogin = () => {
        if (email.trim() && password.trim()) {
            dispatch(login(email, password))
            alert("Login successfull!")
            navigate("/")
        }
        else {
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
                >Login</Heading>
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
                    onClick={handleLogin}
                >Login</Button>
            </Flex>
        </Box>
    )
}