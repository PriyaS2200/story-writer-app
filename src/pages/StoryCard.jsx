import { Button, Flex, Heading, Text } from "@chakra-ui/react"

export const StoryCard = ({story}) => {
    return (
        <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        p={4}
        backgroundColor={"red.300"}
        boxShadow={"2px 5px 10px gray"}
        borderRadius={10}
        >
          <Heading
          fontFamily={"Times New Roman"}
          fontWeight={"bolder"}
          size={"2xl"}
          color={"wheat"}
          textShadow={"2px 2px 5px grey"}
          >{story.title}</Heading>
          <Text
          fontFamily={"cursive"}
          color={"gray.800"}
          textAlign={"center"}
          >{story.beginning}</Text>
          <Text
          mb={2}
          color={"gray.500"}
          fontFamily={"Times New Roman"}
          fontWeight={"bolder"}
          >Created by: {story.creator}</Text>
          <Button
          backgroundColor={"teal.700"}
          boxShadow={"2px 5px 10px grey"}
          >Contribute</Button>
        </Flex>
    )
}