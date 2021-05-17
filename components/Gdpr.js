import Button from "./Button"
import Content from "./Content"

const Gdpr = () => {
    return (
        <div className="flex fixed bottom-0 p-10 bg-gray-900 w-full left-0 z-50 flex-row">
            <Content className="flex w-full justify-between items-center">
                <p className="lg:w-full w-1/2">1
        </p>
                <div className="flex justify-end w-1/5">
                    <Button className="bg-new-green" title="I understand" />
                </div>
            </Content>
        </div>
    )
}

export default Gdpr
