import React, {useState} from 'react';
import  { ChakraProvider } from "@chakra-ui/react";
import SplitPane from "react-split-pane";
import LeftSplit from './LeftSplit';
import UpperSplit from './UpperSplit';
import RightSplit from './RightSplit';
function Body(e) {

    const color ={

    }

    return (
        <ChakraProvider>
            <div className='Body'>
                <SplitPane split="horizontal" minSize={50}>
                    <div>
                        {/*upper split*/}
                        <p>testete</p>
                        <UpperSplit/>
                    </div>
                    <div>
                        {/*<SplitPane split="vertical" minSize={50}>
                            <div>
                                <button>test</button>

                                <LeftSplit/>
                            </div>
                            <div>
                                <p>aaaaa</p>

                                <RightSplit/>
                            </div>
                        </SplitPane>
                        */}
                    </div>
                    {/*split levo*/}
                    {/*split desno*/}
                </SplitPane>
            </div>
        </ChakraProvider>
    );
}

export default Body;

