import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'
import { BsFillPersonFill } from "react-icons/bs"
import {AiTwotoneSetting,AiOutlineLogout} from "react-icons/ai"

const UserMenu = ({handleLogout}) => {
    return (
        <Menu>
            <MenuButton as={Avatar} size='sm' cursor='pointer' src='https://bit.ly/dan-abramov' />
            <MenuList>
                <MenuItem  icon={<BsFillPersonFill />}>
                    <Link href={"/user/profile"}>
                        Profile
                    </Link>
                </MenuItem>
                <MenuItem icon={<AiTwotoneSetting />}>
                    <Link href={"/user/settings"}>
                        Settings
                    </Link>
                </MenuItem>
                <MenuItem icon={<AiOutlineLogout />} onClick={() => handleLogout()}>Logout</MenuItem>

            </MenuList>
        </Menu>
    )
}

export default UserMenu