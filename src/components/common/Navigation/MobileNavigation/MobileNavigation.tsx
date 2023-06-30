import { useEffect } from 'react';
import CategoryList from '../../CategoryList/CategoryList';

type MobileNavigationProps = {
  handleCloseMobileMenu: () => void;
};

export default function MobileNavigation({
  handleCloseMobileMenu,
}: MobileNavigationProps) {
  useEffect(() => {
    const handleResize = () => {
      const vhInPixels = window.innerHeight * 0.01;
      const vhInRem = `${vhInPixels / 16}rem`;

      document.documentElement.style.setProperty('--nav-vh', vhInRem);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <nav
      className='absolute left-0 right-0 top-[calc(var(--navigation-height)+1px)] z-10 block overflow-y-auto overflow-x-hidden'
      onClick={handleCloseMobileMenu}>
      <div className='fixed inset-0 top-navigation-height h-full w-full bg-neutral-900 opacity-50 xl:hidden'></div>
      <div
        onClick={event => event.stopPropagation()}
        className={
          'slim-scrollbar relative max-h-[calc(var(--nav-vh,1vh)*100-var(--navigation-height))] overflow-y-auto rounded-b-lg bg-neutral-100 py-[2.1875rem]'
        }>
        <div className='container mt-9'>
          <CategoryList onCategoryClick={handleCloseMobileMenu} />
        </div>
      </div>
    </nav>
  );
}
