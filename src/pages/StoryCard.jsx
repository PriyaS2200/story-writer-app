import { contributeStory } from "@/redux/actions/storyAction"
import { Button, Flex, Heading, Input, Text } from "@chakra-ui/react"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

export const StoryCard = ({story}) => {
  const [clicked, setClicked] = useState(false)
  const [storyData, setStoryData ] = useState("")
  const dispatch = useDispatch()
  const { user } = useSelector(state=> state.auth)
  let contributions = Object.entries(story.contributions).map(([id,value]) => ({
    id,...value
  }))
  console.log(contributions.length)
  const handleSave = () => {
    const data = {
      contibution: storyData,
      contributor: user.displayName || user.email
    }
    dispatch(contributeStory(story.id,data))
    setClicked(false)
    setStoryData("")
  }

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
           {contributions && 
          contributions.map((contribution) => {
            return (
            <Flex
            flexDirection={"column"}
            justifyContent={"center"}
            textAlign={"center"}
            key={contribution.id}
            gap={4}
            >
            <Text>{contribution.contibution}</Text>
            <Text>Contributor: {contribution.contributor}</Text>
            </Flex>
            )
          })
          } 
          
          {clicked ? (
            <>
            <Input type="text" placeholder="Enter your story here..." 
            value={storyData}
            onChange={(e) => setStoryData(e.target.value)}
            />
            <Button
            backgroundColor={"gray.400"}
            color={"red"}
            onClick={handleSave}
            >Save</Button>
            </>
          ) : (
            <>
            {contributions.length >= 5 && 
            <Text
            color={"white"}
            fontSize={"2xl"}
            >Your story is complete!</Text>
            }
            <Button
            backgroundColor={"teal.700"}
            boxShadow={"2px 5px 10px grey"}
            onClick={() => setClicked(true)}
            disabled={contributions.length >= 5}
            >Contribute</Button>
            </>
          ) }
        </Flex>
    )
}