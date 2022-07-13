import {Button, Form, Input} from "antd";
import {SendOutlined} from "@ant-design/icons";

export const MessageForm = () => {
    return(
        <Form style={{display: "flex", width: '50%', margin: 'auto'}}>
            <Input type={'textarea'}/>
            <Button type="primary" shape="circle" icon={<SendOutlined/>}/>
        </Form>
    )
}