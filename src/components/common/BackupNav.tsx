export default function BackupNav() {
  return (
    <nav
  onClick={handleCloseMobileMenu}
  className={clsx(
    'xl:flex',
    isMobileMenuOpen
      ? 'absolute left-0 right-0 top-[calc(var(--navigation-height)+1px)] z-10 block overflow-y-auto overflow-x-hidden lg:max-h-[1/3]'
      : 'hidden'
  )}>
  <div className='fixed inset-0 top-navigation-height h-full w-full bg-neutral-900 opacity-50 xl:hidden'></div>
  <div
    onClick={e => e.stopPropagation()}
    className={clsx(
      isMobileMenuOpen
        ? 'relative overflow-y-auto rounded-b-lg bg-neutral-100 py-[2.1875rem]'
        : ''
    )}>
    <ConditionalWrapper
      condition={isMobileMenuOpen}
      wrapper={(children: ReactNode) => (
        <div className='container'>{children}</div>
      )}>
      <ul
        className={clsx(
          isMobileMenuOpen
            ? 'relative mt-9 flex flex-col items-center justify-center gap-[3.75rem] lg:flex-row lg:gap-[1rem]'
            : 'flex gap-3'
        )}>
        {navigationLinks.map(
          ({ name, href, className, thumbnail }: NavigationLink) => (
            <li
              className={clsx(
                isMobileMenuOpen &&
                  'relative flex w-full flex-col items-center justify-center rounded-lg bg-neutral-400 p-4',
                className
              )}
              key={name}>
              {isMobileMenuOpen ? (
                <div className='flex w-full flex-col items-center justify-center'>
                  <img
                    className='absolute top-[-26%] h-[8rem] w-auto'
                    src={thumbnail}
                    alt={`${name} Thumbnail`}
                  />
                  <p className='pt-[4.5rem] text-center text-base font-bold uppercase tracking-[0.06694rem]'>
                    {name}
                  </p>
                  <Link
                    className='btn btn-simple pt-2 before:absolute before:inset-0 before:block'
                    onClick={handleCloseMobileMenu}
                    to={href}>
                    Shop
                    <ArrowRightIcon />
                  </Link>
                </div>
              ) : (
                <>
                  <NavigationLink
                    className='text-neutral-100'
                    onClick={handleCloseMobileMenu}
                    to={href}>
                    {name}
                  </NavigationLink>
                </>
              )}
            </li>
          )
        )}
      </ul>
    </ConditionalWrapper>
  </div>
</nav>;

  )
}
