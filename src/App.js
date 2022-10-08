
import {  useState } from 'react';
import LoadingBar from 'react-top-loading-bar';
import './App.css';
import Header from './component/Header';
import Unsplash from './component/Unsplash';
// import Loader from './component/Loader';


function App() {
const [search,setSearch]=useState();
const [page,setPage]=useState(1)
const [progress,setProgress]=useState(0)







  return (
    <div className="hello">
      
       <LoadingBar progress={progress} color='#f11946' />
      <Header search={search} setSearch={setSearch} page={page}  setPage={setPage}  />
     
     <Unsplash setProgress={setProgress} search={search} setSearch={setSearch}  page={page}  setPage={setPage}     />

    </div>
  );
}

export default App;
