// import { useState } from 'react';
import NewProject from './components/NewProject';
import ProjectsSidebar from './components/ProjectsSidebar';
import './index.css';

export default function App() {
  return (
    <main className='h-screen my-8 flex gap-8'>
      <ProjectsSidebar />
      <NewProject />
    </main>
  );
}
