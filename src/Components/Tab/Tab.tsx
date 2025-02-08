import React, { useState } from 'react';
import { TabsContainer, TabItem, TabContent } from './styles';

interface TabProps {
    labels: string[];
    children: React.ReactNode;
    onChange?: (value: string) => void;
}

const Tab = ({ labels, children, onChange }: TabProps) => {
    const [selectedTab, setSelectedTab] = useState(0);

    const handleTabClick = (index: number) => {
        setSelectedTab(index);
        if (onChange) {
            onChange(labels[index]);
        }
    };

    console.log(selectedTab)

    return (
        <div>
            <TabsContainer>
                {labels.map((label, index) => (
                    <TabItem
                        key={index}
                        active={selectedTab === index}
                        onClick={() => handleTabClick(index)}
                    >
                        {label}
                    </TabItem>
                ))}
            </TabsContainer>
            <TabContent>
                {children}
            </TabContent>
        </div>
    );
};

export default Tab;