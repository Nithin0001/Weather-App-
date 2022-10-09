import moment from "moment";

function SummaryCard({weather_icon, day, index}) {
    let s = "";
    if(index > 2){
        s = "Pm";
    } else {
        s = "Am";
    }
    return (
        <li className="container p-4 flex lg:w-auto items-center justify-center bg-gray-100 rounded-md shadow-xl my-auto mr-1 border-l-2 border-r-2 border-blue-400">
            <div className="">
                <p className="font-bold text-ping-600 mb-1">{Math.round(day.main.temp)}&deg;C</p>
                <p className="text-2xl grid grid-cols-2 text-gray-800 tracking-normal">
                    {day.weather[0].main}
                    <div className="bg-gray-400 ml-2 lg:ml-10 w-3/4 md:w-2/5 lg:w-1/4 justify-center items-center rounded-full">
                        <img src={weather_icon}/>
                    </div>
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-normal">{day.weather[0].description}</p>
                <p className="tracking-wider">{moment(day.dt_txt).format('dddd hh:mm')+s}</p>
            </div>
        </li>
    );
}

export default SummaryCard