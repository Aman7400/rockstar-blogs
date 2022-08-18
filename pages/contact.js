import { Button } from "@chakra-ui/react"
import { MdBuild , MdCall } from "react-icons/md"

const Contact = () => { 
    return (
        <div>
            Contact Us
            <Button rightIcon={<MdBuild />} leftIcon={<MdCall />} colorScheme='red' variant="solid">Blow my mind</Button>
        </div>
    )
 }

 export default Contact