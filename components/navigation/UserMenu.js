import { Avatar, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import Link from 'next/link'
import React from 'react'

const UserMenu = ({handleLogout}) => {
    return (
        <Menu>
            <MenuButton as={Avatar} size='sm' cursor='pointer' src='https://bit.ly/dan-abramov' />
            <MenuList>
                <MenuItem>
                    <Link href={"/user/profile"}>
                        Profile
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link href={"/user/settings"}>
                        Settings
                    </Link>
                </MenuItem>
                <MenuItem onClick={() => handleLogout()}>Logout</MenuItem>

            </MenuList>
        </Menu>
    )
}

export default UserMenu