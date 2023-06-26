import ArrowRightIcon from './assets/shared/desktop/icon-arrow-right.svg';

function App() {
  return (
    <>
      <div>
        <h1 className='text-orange'>Hello World!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          accusamus, deleniti corporis recusandae voluptatibus velit.
        </p>
        <a href='#' className='btn btn-primary'>
          See product
        </a>
        <a href='#' className='btn btn-secondary'>
          See product
        </a>
        <a href='#' className='btn btn-simple'>
          Shop
          <img src={ArrowRightIcon} alt='' />
        </a>
        <a href='#' className='btn btn-secondary-invert'>
          See product
        </a>
      </div>
    </>
  );
}

export default App;
