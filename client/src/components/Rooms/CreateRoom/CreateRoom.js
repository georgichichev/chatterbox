import {Button, Form, Input, InputNumber, Select} from 'antd';
import {useNavigate} from "react-router-dom";
import {createRoom} from "../../../service/roomService.js";

const urlTypes = [
    {value: "https", label: "https://"},
    {value: "http", label: "http://"},
];

const UrlTypeSelect = <Select options={urlTypes}/>;

export const CreateRoom = () => {
    const navigate = useNavigate();


    const onFinish = (values) => {
        const {capacity, name, photo, prefix} = values;

        const data = {capacity, name, imageUrl: prefix + photo};

        createRoom(data)
            .then(() => navigate('/rooms'))
            .catch((err) => console.log(err));
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div style={{margin: 'auto', width: '40%'}}>
            <Form
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
                    name='photo'
                    label='Photo URL'
                    rules={[{required: true}]}
                >
                    <Input
                        placeholder="Photo url"
                        addonBefore={
                            <Form.Item
                                name='prefix'
                                noStyle
                                initialValue="https://"
                            >
                                {UrlTypeSelect}
                            </Form.Item>
                        }
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateRoom;