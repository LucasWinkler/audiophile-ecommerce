import ArrowRightIcon from '../components/common/ArrowRightIcon';

export default function Home() {
  return (
    <div className=''>
      <div className='container'>
        <h1>Home Page</h1>
        <div className='flex items-center gap-2'>
          <button className='btn btn-primary'>Click me</button>
          <button className='btn btn-secondary'>Click me</button>
          <button className='btn btn-secondary-alt'>Click me</button>
          <button className='btn btn-simple'>
            Click me
            <ArrowRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
}
