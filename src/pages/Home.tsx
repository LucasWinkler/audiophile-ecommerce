import ArrowRightIcon from '../assets/shared/desktop/icon-arrow-right.svg';

export default function Home() {
  return (
    <>
      <div className='container'>
        <h1>Home Page</h1>
        <div className='flex items-center gap-2'>
          <button className='btn btn-primary'>Click me</button>
          <button className='btn btn-secondary'>Click me</button>
          <button className='btn btn-secondary-invert'>Click me</button>
          <button className='btn btn-simple'>
            Click me
            <img src={ArrowRightIcon} alt='' />
          </button>
        </div>
      </div>
    </>
  );
}
