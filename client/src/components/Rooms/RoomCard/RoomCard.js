import {EditOutlined, EllipsisOutlined, SettingOutlined} from '@ant-design/icons';
import {Avatar, Card} from 'antd';
import React, {useState} from 'react';
import EditModal from "../EditModal/EditModal.js";

const {Meta} = Card;

export const RoomCard = ({room, onEdit}) => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleEdit = () => {
        setIsModalVisible(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <EditModal room={room} onEdit={onEdit} isModalVisible={isModalVisible} handleCancel={handleCancel} handleEdit={handleEdit}/>
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