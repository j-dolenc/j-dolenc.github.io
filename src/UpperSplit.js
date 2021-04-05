import React, {useState} from 'react';
import {Button, ChakraProvider} from "@chakra-ui/react";
import SplitPane from "react-split-pane";
import IzbiraZivali from "./IzbiraZivali";
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

function UpperSplit(e) {



    return (
        <ChakraProvider>
            <div className='UpperSplit'>
                <IzbiraZivali style={{left:0}}/>
            </div>
        </ChakraProvider>
    );
}

export default UpperSplit;