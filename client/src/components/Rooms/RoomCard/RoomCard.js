import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';
import React from 'react';

const {Meta} = Card;

export const RoomCard = ({room}) => {
    return (
        <Card
            style={{
                width: 300,
            }}
            cover={
                <img
                    alt="example"
                    src={room.imageUrl}
                />
            }
            actions={[
                <SettingOutlined key="setting"/>,
                <EditOutlined key="edit"/>,
                <EllipsisOutlined key="ellipsis"/>,
            ]}
        >
            <Meta
                avatar={<Avatar src={room.imageUrl}/>}
                title={room.name}
                description={`This room is for ${room.capacity} people.`}
            />
        </Card>
    )
};