import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react"

export const Register = () => {
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
                    type="email" placeholder="Enter Email" />
                <Input
                    borderRadius={8}
                    borderWidth={"2px"}
                    fontFamily={"cursive"}
                    fontWeight={"bolder"}
                    backgroundColor={"gray.300"}
                    size={"lg"}
                    type="password" placeholder="Enter Password" />
                <Button
                    backgroundColor={"blue.400"}
                    fontWeight={"bolder"}
                >Register</Button>
            </Flex>
        </Box>
    )
}