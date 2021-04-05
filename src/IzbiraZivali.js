import React, {useState} from 'react';
import {Button, ChakraProvider} from "@chakra-ui/react";
import SplitPane from "react-split-pane";
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,
} from "@chakra-ui/react"
function IzbiraZivali(e) {


    return (
        <ChakraProvider>
            <div className='IzbiraZivali'>
                <Menu>
                    <MenuButton as={Button}>
                        Actions
                    </MenuButton>
                    <MenuList>
                        <MenuItem>Kača</MenuItem>
                        <MenuItem>Create a Copy</MenuItem>
                        <MenuItem>Mark as Draft</MenuItem>
                        <MenuItem>Delete</MenuItem>
                        <MenuItem>Attend a Workshop</MenuItem>
                    </MenuList>
                </Menu>
            </div>
        </ChakraProvider>
    );
}

export default IzbiraZivali;