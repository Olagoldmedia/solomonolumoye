
import { Routes, Route } from 'react-router-dom'
import Home from './projects/Home'
import PodsMedia from './projects/Pods-media'
import PodsMediaCreator from './projects/Pods-media-creator'
import CoopRecords from './projects/coop-records'
import JamitMobile from './projects/JamitMobile'
import JamitWeb from './projects/JamitWeb'
import OderNow from './projects/odernow'
import About from './About'

function App() {
  return (
    <div>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/pods-media" element={<PodsMedia/>}/>
        <Route path="/pods-media-creator" element={<PodsMediaCreator/>}/>
        <Route path="/coop-records" element={<CoopRecords/>}/>
        <Route path="/jamit-mobile" element={<JamitMobile/>}/>
        <Route path="/jamit-web" element={<JamitWeb/>}/>
        <Route path="/odernow" element={<OderNow/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App
