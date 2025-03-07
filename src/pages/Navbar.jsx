import { logout } from "@/redux/actions/authAction"
import { Box, Button, Flex, Text } from "@chakra-ui/react"
import { useDispatch, useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"

export const Navbar = () => {
    const user = useSelector(state => state.auth.user)
    const dispatch = useDispatch()
    const navigate = useNavigate()
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
                    justifyContent={"center"}
                    alignItems={"center"}
                >
                    <Link to="/">Home</Link>
                    {user ?
                        <>
                            <Link to="/my-story">MyStory</Link>
                            <Button
                                backgroundColor={"blue.300"}
                                fontFamily={"monospace"}
                                fontSize={"lg"}
                                color={"blue.500"}
                                fontWeight={"bolder"}
                                textShadow={"2px 2px 5px lightyellow"}
                                textAlign={"center"}
                                onClick={() => {dispatch(logout())
                                    navigate('/')
                                }}
                            >Logout</Button>
                        </>
                        :
                        <>
                            <Link to="/register">Register</Link>
                            <Link to="/login">Login</Link>
                        </>}
                </Flex>
            </Flex>
        </Box>
    )
}