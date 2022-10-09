function Header() {
    return (
        <ul className="flex w-full font-bold">
            <li className="text-xl text-gray-800 ml-2 lg:ml-10 border-b-4 alert-notice rounded border-blue-500 cursor-pointer">Weather</li>
            {/* <li className="text-m text-gray-800 ml-auto mr-6 alert-notice border-b-2 hover:border-blue-500 cursor-pointer">Alerts</li>
            <li className="text-m text-gray-800 ml-auto mr-6 border-b-2 hover:border-blue-500 cursor-pointer">Map</li>
            <li className="text-m text-gray-800 ml-auto mr-6 border-b-2 hover:border-blue-500 cursor-pointer">Satellite</li>
            <li className="text-m text-gray-800 ml-auto mr-6 border-b-2 hover:border-blue-500 cursor-pointer">News</li> */}
        </ul>
    );
}

export default Header