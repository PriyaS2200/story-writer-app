import { createStory, fetchStories } from "@/redux/actions/storyAction"
import { Box, Button, Flex, Grid, Heading, Input } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StoryCard } from "./StoryCard"

export const MyStory = () => {
    const [title,setTitle] = useState("")
    const [beginning, setBeginning] = useState("")
    const { user } = useSelector(state=> state.auth)
    const { story } = useSelector(state=> state.stories)
    const dispatch = useDispatch()
    console.log(user.displayName)
    useEffect(() => {
        dispatch(fetchStories())
    },[])

    const handleAdd = () => {
        if(title.trim() && beginning.trim()){
            const storyData = {
                title: title,
                beginning: beginning,
                creator: user.displayName || user.email
            }
            dispatch(createStory(storyData))
            setTitle("")
            setBeginning("")
        }
        else {
            alert("All fields are mandatory!")
        }
    }

    return (
        <Box
        p={6}
        display={"flex"}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        >
        <Heading
        textAlign={"center"}
        fontFamily={"cursive"}
        fontWeight={"bolder"}
        fontSize={"3xl"}
        color={"whiteAlpha.950"}
        textShadow={"2px 2px 5px wheat"}
        >Welcome {user.displayName ? user.displayName : user.email }</Heading>
        <Flex
        p={4}
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={4}
        width={"50%"}
        >
            <Input
            size={"lg"}
            fontFamily={"monospace"}
            fontWeight={"bolder"}
            boxShadow={"2px 2px 5px gray"}
            backgroundColor={"whiteAlpha.600"}
            type="text" placeholder="Enter title of your story"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            />
            <Input
            size={"lg"}
            fontFamily={"monospace"}
            fontWeight={"bolder"}
            boxShadow={"2px 2px 5px gray"}
            backgroundColor={"whiteAlpha.600"}
            type="text" placeholder="Enter Initial Beginning of your story..."
            value={beginning}
            onChange={(e)=> setBeginning(e.target.value)}
            />
            <Button
            backgroundColor={"gray.400"}
            onClick={handleAdd}
            >Add Story</Button>
        </Flex>
        <Grid
        templateColumns={"repeat(2,1fr)"}
        gap={5}
        p={4}
        >
        {story.length > 0 && 
            story.map((story) => {
                return (
                    <StoryCard story = {story} key={story.id}/>
                )
            })
        }
        </Grid>
        </Box>
    )
}