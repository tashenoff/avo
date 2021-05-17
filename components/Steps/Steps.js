import React from 'react'
import Ball from '../icons/Ball'

const Steps = () => {
    return (

        <div className="grid lg:grid-cols-4 grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center">
                <div className="relative bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center">
                    <Ball fill="red" />
                    <div className="dark:bg-new-green bg-green-300 w-5 h-5 rounded-full absolute top-0 right-0 flex justify-center items-center">
                        1
                    </div>
                </div>
                <span className="mt-5"> Разместить<br/> заказ </span>
            </div>

            <div className="flex flex-col items-center text-center">
                  <div className="relative bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center">
                <div className="dark:bg-new-green bg-green-300 w-5 h-5 rounded-full absolute top-0 right-0 flex justify-center items-center">
                        2
                    </div>
                    <Ball fill="red" />
                </div>
                <span className="mt-5">Выберите<br/> специалиста</span>
            </div>

            <div className="flex flex-col items-center text-center">
                  <div className="relative bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center">
                  <div className="dark:bg-new-green bg-green-300 w-5 h-5 rounded-full absolute top-0 right-0 flex justify-center items-center">
                        3
                    </div>
                    <Ball fill="red" />
                </div>
                <span className="mt-5">Наблюдайте<br/> за процессом работы </span>
            </div>


            <div className="flex flex-col items-center text-center">
                  <div className="relative bg-white p-5 rounded-full w-20 h-20 flex items-center justify-center">
                  <div className="dark:bg-new-green bg-green-300 w-5 h-5 rounded-full absolute top-0 right-0 flex justify-center items-center">
                        4
                    </div>
                    <Ball fill="red" />
                </div>
                <span className="mt-5">Получите <br/> готовую работу</span>
            </div>

        </div>
    )
}

export default Steps
