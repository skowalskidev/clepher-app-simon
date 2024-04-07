'use client'

import Chips from "../Actions/Chips"
import { InputButton } from "../Actions/InputButton"
import { TabsUnderlined } from "../Navigation/Tabs/TabsUnderlined"
import { Select } from "../Actions/Select"
import { Toggle } from "../Actions/Toggle"
import { TabsButtons } from "../Navigation/Tabs/TabsButtons"
import { useState } from "react"

export const TabbedTable = () => {
    const [leftSideActiveTab, setLeftSideActiveTab] = useState(0);
    const [rightSideActiveTab, setRightSideActiveTab] = useState(0);

    const leftSideLabels = ['Settings', 'Auto Resonse'];
    const rightSideLabels = ['Select A Post', 'Post ID / URL'];

    const leftPageContent = () => {
        switch (leftSideActiveTab) {
            case 0:
                return (
                    <>
                        <Toggle label="Enable To Privately Reply To First-Level Comments Only" />
                        <Toggle label="Send Message To The Same User Only Once Per Post" />
                        <Chips />
                        <InputButton buttonLabel="Add Keyword" placeholder="Type here" label="Exclude Comments With These Keywords" />
                        <InputButton buttonLabel="Add Keyword" placeholder="Type here" label="Only Trigger For Comments With These Keywords" />
                        <Select label="Message Type" selected="Select" options={['Flow', 'Single Message']} />
                        <Select label="Message Type" selected="Select" options={['Flow', 'Single Message']} />
                    </>
                );
            case 1:
                return (
                    <Select label="Message Type" selected="Select" options={['Flow', 'Single Message']} />
                );
            default:
                return null;
        }
    };

    const rightPageContent = () => {
        switch (rightSideActiveTab) {
            case 0:
                return <div>Select a Post</div>;
            case 1:
                return <div>Search for a Post</div>;
            default:
                return null;
        }
    };

    return (
        <div className="flex gap-14 w-full">
            <div className="flex-1 flex flex-col gap-2">
                <TabsUnderlined
                    labels={leftSideLabels}
                    selected={leftSideLabels[leftSideActiveTab]}
                    onTabChange={(index) => setLeftSideActiveTab(index)}
                />
                {leftPageContent()}
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <TabsButtons
                    labels={rightSideLabels}
                    selected={rightSideLabels[rightSideActiveTab]}
                    onTabChange={(index) => setRightSideActiveTab(index)}
                />
                {rightPageContent()}
            </div>
        </div>
    );
};
