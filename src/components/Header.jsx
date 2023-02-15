import { Avatar } from './Avatar'
import { Text } from '../ui/Text'
import { Button } from './Button'

export const Header = (props) => {
    return (
        <>
            <Avatar />
            <Text bold> @adatechbr </Text>
            
            <Button>
                <Text> Seguindo </Text>
            </Button>

            <Button>
                <Text></Text>
            </Button>

            <Text> 211 publicações</Text>
            <Text> 44,2 mil seguidores </Text>
            <Text> 2 seguindo</Text>
        </>
    )
}