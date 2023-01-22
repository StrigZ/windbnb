import './App.css'
import Header from './components/Header/Header'
import StaysList from './components/Stays/StaysList'
import SearchExtendedModal from './components/Header/SearchExtended/SearchExtended'
import { useSelector } from 'react-redux'
import { selectSearch } from './store/searchSlice'

function App() {
  const searchState = useSelector(selectSearch)
  return (
    <>
      {searchState.isActive && <SearchExtendedModal />}
      <Header />
      <StaysList />
    </>
  )
}

export default App
