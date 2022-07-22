import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';
import React, {useState} from 'react';
import EditModal from "../EditModal/EditModal.js";

const {Meta} = Card;

export const RoomCard = ({room}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <EditModal room={room} isModalVisible={isModalVisible} handleCancel={handleCancel}/>
            <Card
                hoverable={true}
                style={{
                    width: 300,
                }}
                actions={[
                    <SettingOutlined key="setting"/>,
                    <EditOutlined onClick={showModal} key="edit"/>,
                    <EllipsisOutlined key="ellipsis"/>,
                ]}
            >
                <Meta
                    avatar={<Avatar src={room.imageUrl}/>}
                    title={room.name}
                    description={`This room is for ${room.capacity} people.`}
                />
            </Card>
        </>
    )
};