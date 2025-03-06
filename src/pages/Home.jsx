import { Flex, Heading, Span, Text } from "@chakra-ui/react"
import { LuNotebookPen } from "react-icons/lu";
import { Link } from "react-router-dom";

export const Home = () => {
    return (
        <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            p={10}
            gap={5}
        >
            <Heading
                size={"4xl"}
                color={"teal.700"}
                textShadow={"2px 2px 5px lightyellow"}
                fontFamily={"sans-serif"}
                fontWeight={"bolder"}
            >Welcome!</Heading>
            <Text
                fontFamily={"cursive"}
                fontWeight={"bolder"}
                color={"gray.500"}
            >
                Create your own story with
            </Text>
            <Span
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}
                gap={2}
                fontSize={"2xl"}
                fontWeight={"bolder"}
                textShadow={"2px 2px 5px wheat"}
                color={"whiteAlpha.900"}
            >My Story Application <LuNotebookPen />
            </Span>
            <Text
                fontFamily={"cursive"}
                fontWeight={"bolder"}
                color={"gray.500"}
                textAlign={"center"}
            >
                If you are a registered user please <Link to="/login" style={{ color: "blue",textDecoration: "underline" }}>Login</Link> else
                <br></br> 
                <Link to="/register" style={{ color: "blue", textDecoration: "underline" }}>Register</Link> to get started.
            </Text>
        </Flex>
    )
}