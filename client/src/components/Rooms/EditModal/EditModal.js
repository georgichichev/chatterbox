import {Button, Form, Input, InputNumber, Modal} from 'antd';
import useForm from "antd/es/form/hooks/useForm.js";
import {editRoom} from "../../../service/roomService.js";
import {useNavigate} from "react-router-dom";

const EditModal = ({isModalVisible, handleCancel, room, onEdit}) => {
    const navigate = useNavigate();
    const [form] = useForm();

    const onFinish = (values) => {
        editRoom(values, room._id)
            .then(result => {
                onEdit(result);
                form.resetFields();
                handleCancel();
            })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            <Modal okText='Edit' okButtonProps={{htmlType: 'submit', form: 'edit-form'}} centered={true} title="Edit Room" visible={isModalVisible} onCancel={handleCancel}>
                    <Form
                        form={form}
                        id="edit-form"
                        name="basic"
                        labelCol={{
                            span: 8,
                        }}
                        wrapperCol={{
                            span: 16,
                        }}
                        initialValues={{
                            remember: true,
                        }}
                        size="large"
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item
                            label="Room Name"
                            name="name"
                            initialValue={room.name}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input room name!',
                                },
                            ]}
                        >
                            <Input/>
                        </Form.Item>

                        <Form.Item
                            label="Capacity"
                            name="capacity"
                            initialValue={room.capacity}
                            rules={[
                                {
                                    required: true,
                                    message: 'Please input capacity!',
                                },
                            ]}
                        >
                            <InputNumber size="large" min={2} max={20}/>
                        </Form.Item>


                        <Form.Item
                            name='imageUrl'
                            label='Photo URL'
                            initialValue={room.imageUrl}
                            rules={[{required: true}]}
                        >
                            <Input
                                placeholder="Photo url"
                            />
                        </Form.Item>
                    </Form>
            </Modal>
        </>
    );
};

export default EditModal;