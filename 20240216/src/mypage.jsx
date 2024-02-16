import React from 'react';
import {Form} from 'react-router-dom';
export default ()=>{
    return <div>
        <Form method="get" action="/home" relative='path' preventScrollReset={true}>
            <input type="text" name="email"/>
            <button type="submit">제출</button>
        </Form>
    </div>
}