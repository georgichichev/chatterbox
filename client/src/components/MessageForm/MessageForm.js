import {Button, Form, Input} from "antd";
import {SendOutlined} from "@ant-design/icons";
import FormItemLabel from "antd/es/form/FormItemLabel.js";

export const MessageForm = ({message, onFormSubmit, onInputChange}) => {
    return (
        <Form onFinish={() => onFormSubmit(message)} style={{display: "flex", width: '50%', margin: 'auto'}}>
                <Input value={message.content} onChange={onInputChange} placeholder="Enter message"/>
            <Button htmlType="submit" type="primary" shape="circle" icon={<SendOutlined/>}/>
        </Form>
    )
}