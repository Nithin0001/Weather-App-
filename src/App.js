import {useState} from 'react';
import Header from './components/Header';
import DetailCard from './components/DetailCard';
import SummaryCard from './components/SummaryCard';

function App() {

  const [noData, setNoData] = useState('No data yet');
  const [searchTerm, setSearchTerm] = useState('');
  const [weatherData, setWeatherData] = useState([]);
  const [city, setCity] = useState('Select a city');
  const [weatherIcon, setWeatherIcon] = useState(`https://openweathermap.org/img/wn/10n@2x.png`);


  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherData(searchTerm);
  };

  const handleChange = (input) => {
    const {value} = input.target;
    setSearchTerm(value);
  };

  const getWeatherData = async (location) => {
    setWeatherData([]);
    let howToSearch = (typeof location === 'string') ? `q=${location}` : `lat=${location[0]}&lon=${location[1]}`;
    try {
      let response = await fetch(`https://api.openweathermap.org/data/2.5/forecast?${howToSearch}&appid=${API_KEY}&units=metric&cnt=5&exclude=hourly,minutely`);
      let data = await response.json();
      if(data.cod != 200) {
        setNoData('Location not found');
        return;
      }
      setWeatherData(data);
      setCity(`${data.city.name}, ${data.city.country}`);
      setWeatherIcon(`https://openweathermap.org/img/wn/${data.list[0].weather[0]["icon"]}@4x.png`);
    } catch (error) {
      console.log(error);
    }
  };

  const myIP = (location) => {
    const {latitude, longitude} = location.coords;
    getWeatherData([latitude, longitude]);
  };

  return (
    <div className="bg-blue-100 flex w-screen h-screen justify-center items-center p-5">
      <div className="grid sm:grid-cols-1 gap-4 lg:flex w-screen h-full sm:min-h-full rounded-2xlbg-transparent">
          {/* // From card section */}
          <div className="form-container shadow-xl">
            <div className="flex items-center justify-center">
              <h3 className="my-auto mr-auto text-xl text-blue-600 font-bold shadow-md py-1 px-3 rounded-md bg-white bg-opacity-50">
                Forecast
              </h3>
              <div className="flex p-2 text-gray-100 bg-gray-600 bg-opacity-30 rounded-lg">
                <i className="fa fa-map my-auto" aria--hidden="true"></i>
                <div className="text-right">
                  <p className="font-semibold text-sm ml-2">{city}</p>
                </div>
              </div>
            </div>
            <div className="flex mb-32 lg:mb-0 flex-col items-center justify-center h-full">
              <h1 className="text-white text-2xl">The Only Weather Forecast App you Need</h1>
              <hr className="h-1 bg-white w-2/4 rounded-full my-5"/>
              <form noValidate onSubmit={handleSubmit} className="flex justify-center w-full">
                <input 
                  type="text"
                  className="relative rounded-md py-2 px-3 w-2/3 bg-white bg-opacity-30 text-blue-900 placeholder-gray-200"
                  onChange={handleChange}
                  placeholder="Enter Location"
                  required
                />
                <button type="submit" className="z-10">
                <i className="fa fa-search text-blue-900 text-xl -ml-10 mr-2 my-auto z-10 cursor-pointer p-3" 
                  aria-hidden="true" type="submit"></i>
                </button>
                <i className="fa fa-map-marker-alt my-auto cursor-pointer p-3 text-blue-900" aria-hidden="true" onClick={() => {
                  navigator.geolocation.getCurrentPosition(myIP);
              }}></i>
              </form>
            </div>
          </div>
          {/* Info card section */}
          <div className="lg:w-2/4 p-5 rounded-2xl bg-gray-50 shadow-xl">
            <Header />
            <div className="flex flex-col my-10">
              {
                weatherData.length === 0 ? 
                <div className="container p-4 flex items-center justify-center h-1/3 mb-auto rounded-md shadow-lg bg-gray-200">
                  <h1 className="text-4xl text-gray-500 font-bold uppercase">{noData}</h1>
                </div>
                :
                <>
                  <h1 className="text-2xl lg:text-5xl text-gray-800 mt-auto mb-4">Today</h1>
                  <DetailCard weather_icon={weatherIcon} data={weatherData} />
                  <h1 className="text-3xl text-gray-600 mb-4 mt-10">More On {city}</h1>
                  <ul className="grid grid-cols-2 gap-4 lg:gap-2">
                    {
                      weatherData.list.map((days, index) => {
                        if(index > 0) {
                          return (
                            <SummaryCard index={index} weather_icon={weatherIcon} key={index} day={days} />
                          );
                        }
                      })
                    }
                  </ul>
                </>
              }
            </div>
          </div>
          <div className="mt-1 md:mt-0 lg:mt-0 lg:hidden"><p className="text-blue-100">.</p></div>
      </div>
    </div>
  );
}

export default App;
