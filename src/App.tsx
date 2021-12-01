

import { SideBar } from './components/SideBar';
import { Content } from './components/Content';



import './styles/global.scss';

import './styles/sidebar.scss';
import './styles/content.scss';
import { useState } from 'react';




export function App() {
  const [selectedGenreId, setSelectedGenreId] = useState(1);

  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }
  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>

      <SideBar pushGenreId={handleClickButton} getGenreId={selectedGenreId} />
      <Content selectedId={selectedGenreId} />

    </div>
  )
}