import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <form className="flex flex-col max-w-6xl m-auto pt-5 border-gray-400 bg-white rounded-lg border p-2  md:flex-row md:w-full md:mt-40">
          <div>
              <img className="rounded-t-lg h-full" src="/img/3.jpg" alt="" />
          </div>
          <div className="p-5">
              <a href="#">
                  <h4 className="mb-2 text-2xl text-center font-bold tracking-tight text-gray-900 ">“Let food be thy medicine and medicine be thy food.”</h4>
              </a>
              {/* Select Sections Start */}
              <div className="mt-5">
                <label for="countries" className="block mb-2 text-base font-medium text-gray-900">👉Select your Mender</label>
                <select id="countries" className="bg-gray-200 border font-medium  border-gray-600 text-black text-base rounded-lg  block w-5/6 p-2.5">
                  <option>🧑(Male)</option>
                  <option>👩(Female)</option>
                </select>
              </div>
              {/* Select Form End */}
              {/* Select Sections Start */}
              <div className="mt-5">
                <label for="countries" className="block mb-2 text-base font-medium text-gray-900">🎯Goal</label>
                <select id="countries" className="bg-gray-200 border font-medium border-gray-600 text-black text-base rounded-lg  block w-5/6 p-2.5">
                  <option>Reduce your long-term health risk</option>
                  <option>Reduce your risk of injury</option>
                </select>
              </div>
              {/* Select Form End */}
              {/* Select Sections Start */}
              <div className="mt-5">
                <label for="countries" className="block mb-2 text-base font-medium text-gray-900 w-4/5">👨‍👦Are you pregnant? Under 18 , or operating heavy machinery</label>
                <select id="countries" className="bg-gray-200 border font-medium border-gray-600 text-black text-base rounded-lg  block w-5/6 p-2.5">
                  <option>Yes</option>
                  <option>No</option>
                </select>
              </div>

              <div className="mt-5 flex gap-10 md:gap-20 items-center ">
                <p className="text-base md:text-xl font-medium">🥃Number of Standard Drinks</p>
                <p className="text-base md:text-2xl "></p>
              </div>
              {/* Select Form End */}


              <button  className="inline-flex items-center py-2 px-3 mt-10 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 ">
                  Calculate
                  <svg aria-hidden="true" className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
              </button>
          </div>
      </form>
  );
}

export default App;
