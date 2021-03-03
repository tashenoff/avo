import React, { useState } from 'react'
import Button from '../components/Button'
import Content from '../components/Content'
import Form from '../components/Form'
import H1 from '../components/H1'
import Input from '../components/Input'
import Layout from '../components/layout'
import LoginBg from '../components/svg/LoginBg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";


const login = () => {
    const [passwordShown, setPasswordShown] = useState(false);
    const eye = <FontAwesomeIcon icon={faEye} className="h-5 w-5" />;
    const togglePasswordVisiblity = () => {
        setPasswordShown(passwordShown ? false : true);
    };
    return (

        <>
            <Layout>
                <Content className="flex flex-col justify-center items-center h-screen relative">
                    <LoginBg className="absolute z-40" />
                    <Form className="flex flex-col w-1/3 bg-white p-5 rounded-lg relative z-50 text-gray-500">
                        <H1 className="text-gray-800 mb-5 text-center" title="Welcome" />
                        <Input className="mb-3 border border-gray-200" placeholder="login" type="email" />
                        <div className="flex items-center rounded-lg bg-white border border-gray-200 mb-3">
                            <Input className="w-full" placeholder="password" type={passwordShown ? "text" : "password"} />
                            <div className="pl-5 pr-5">
                                <i className="text-gray-400 block" onClick={togglePasswordVisiblity}>{eye}</i>
                            </div>
                        </div>
                        <Button type="submit" className="bg-orange text-white" title="login" />
                        <div className="flex flex-row w-full justify-between mt-5">
                            <Input name="remember_me" id="remember_me" className="mb-3 border border-gray-200" type="checkbox" />
                            <label for="remember_me" class="ml-2 block text-sm text-gray-900">
                                Remember me
                             </label>
                            <div>Forgot your password? </div>
                        </div>
                        <div className="text-center mt-5">
                            OR
                        </div>
                        <div className="flex flex-row w-full mt-5">
                            <Button className="bg-red-500 w-full mr-2 text-white" title="Google" />
                            <Button className="bg-blue-500 w-full ml-2 text-white" title="Facebook" />
                        </div>
                        <p className="p-5 text-center">
                            Политика пользования
                        </p>
                    </Form>
                </Content>
            </Layout>
        </>
    )
}

export default login
