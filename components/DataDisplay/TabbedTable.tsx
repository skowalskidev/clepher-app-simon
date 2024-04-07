'use client'

import { TabsUnderlined } from '../Navigation/Tabs/TabsUnderlined';
import { TabsButtons } from '../Navigation/Tabs/TabsButtons';
import { useState } from 'react';

interface Page {
    label: string;
    content: React.ReactNode;
}

interface Props {
    leftPages: Page[];
    rightPages: Page[];
}

export const TabbedTable = ({ leftPages, rightPages }: Props) => {
    const [leftSideActiveTab, setLeftSideActiveTab] = useState(0);
    const [rightSideActiveTab, setRightSideActiveTab] = useState(0);

    return (
        <div className="flex flex-col-reverse sm:flex-row gap-14 w-full">
            <div className="flex-1 flex flex-col gap-2">
                <TabsUnderlined
                    labels={leftPages.map(page => page.label)}
                    selected={leftPages[leftSideActiveTab].label}
                    onTabChange={(index) => setLeftSideActiveTab(index)}
                />
                {leftPages[leftSideActiveTab].content}
            </div>
            <div className="flex-1 flex flex-col gap-2">
                <TabsButtons
                    labels={rightPages.map(page => page.label)}
                    selected={rightPages[rightSideActiveTab].label}
                    onTabChange={(index) => setRightSideActiveTab(index)}
                />
                <div className='flex'>
                    {rightPages[rightSideActiveTab].content}
                </div>
            </div>
        </div>
    );
};
