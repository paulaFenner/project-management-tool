import projectImage from '../assets/no-projects.png';
import Button from './Button';

export default function NoProjectSelected({ onStartAddProject }) {
  return (
    <div className='mt-24 text-center w-2/3'>
      <img
        src={projectImage}
        alt='an empty task list'
        className='w-16 h16 object-contain mx-auto'
      />
      <h2 className='text-xl font-bold test-stone-500 my-4'>
        No project Selected
      </h2>
      <p className='text-stone-400 mb-4'>
        Select a project or get started with a new one
      </p>
      <div className='mt-8'>
        <Button onClick={onStartAddProject}>Create new project</Button>
      </div>
    </div>
  );
}
