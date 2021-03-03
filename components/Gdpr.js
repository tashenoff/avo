import Button from "./Button"
import Content from "./Content"

const Gdpr = () => {
    return (
        <div className="flex fixed bottom-0 p-10 bg-gray-900 w-full left-0 z-50 flex-row">
            <Content className="flex w-full justify-between items-center">
                <p className="w-full">We use cookies to provide our services and for analytics and marketing.
                To find out more about our use of cookies, please see our Privacy Policy
                and Cookie and Tracking Notice. By continuing to browse our website, you agree to our use of cookies.
        </p>
                <div className="flex justify-end w-1/5">
                    <Button className="bg-new-green" title="I understand" />
                </div>
            </Content>
        </div>
    )
}

export default Gdpr
