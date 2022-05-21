import {Button, Text} from "@nextui-org/react";
import {FaGithubAlt} from "react-icons/fa";

export default function Contact() {
    return (
        <div>
            <Text h2 css={{mx: 0, my: 3}} size={60}>Let's talk!</Text>
            <Button
                shadow
                auto
                color="error"
                icon={<FaGithubAlt/>}
            />
        </div>
    )
}