import { Box, Flex, Text } from "@chakra-ui/react"
import { Link } from "react-router-dom"

export const Navbar = () => {
    return (
        <Box
        p={4}
        backgroundColor={"blue.300"}
        color={"whiteAlpha.900"}
        fontFamily={"monospace"}
        fontSize={"lg"}
        boxShadow={"2px 2px 5px lightgrey"}
        >
            <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            >
                <Text
                fontWeight={"bolder"}
                textShadow={"2px 2px 5px wheat"}
                >My Story Application</Text>
                <Flex
                gap={5}
                color={"blue.500"}
                fontWeight={"bolder"}
                textShadow={"2px 2px 5px lightyellow"}
                >
            <Link to="/">Home</Link>
            <Link to="/my-story">MyStory</Link>
            <Link to="/register">Register</Link>
            <Link to="/login">Login</Link>
                </Flex>
            </Flex>
        </Box>
    )
}