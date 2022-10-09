import moment from 'moment';

function DetailCard({weather_icon, data}) {
    const {clouds, main, weather} = data.list[0];

    return (
        <div className="container p-4 flex items-center justify-center shadow-lg rounded-xl bg-sky-100 h-60 lg:h-1/3 mb-auto border-l-2 border-r-2 border-blue-800">
            <div className="my-auto">
                <p className="font-bold text-5xl text-blue-800 mb-2">{Math.round(main.temp)}&deg;C</p>
                <div className="grid grid-flow-col">
                    <p className="text-gray-800 text-4xl tracking-widest">
                        {weather[0].main}
                    </p>
                    <div className="bg-gray-400 alert-notice-img ml-2 md:w-2/5 lg:ml-10 w-full lg:w-1/4 justify-center items-center rounded-full">
                        <img src={weather_icon}/>
                    </div>
                </div>
                <p className="text-gray-900 text-xs uppercase tracking-widest">{weather[0].description}</p>
                <p className="tracking-wider">{moment().format("dddd MMM YYYY")}</p>
            </div>
            <div className="grid grid-cols-2 gap-3 ml-4 lg:grid-cols-1 border-l-2 border-r-2 h-11/12 border-blue-800 p-2 bg-gray-100 shadow-lg rounded-xl">
                <p className="text-gray-800 text-xs lg:text-lg ml-1 lg:ml-5">RealFeel : {Math.round(main.feel_like)}&deg;C</p>
                <p className="text-gray-800 text-xs lg:text-lg ml-1 lg:ml-5">Humidity : {main.humidity}%</p>
                <p className="text-gray-800 text-xs lg:text-lg ml-1 lg:ml-5">Cloud Cover : {clouds.all}%</p>
                <p className="text-gray-800 text-xs lg:text-lg ml-1 lg:ml-5">Min Temp : {Math.round(main.temp_min)}&deg;C</p>
                <p className="text-gray-800 text-xs col-span-2 lg:col-span-1 lg:text-lg ml-1 lg:ml-5">Max Temp : {Math.round(main.temp_max)}&deg;C</p>
            </div>
        </div>
    );
}

export default DetailCard