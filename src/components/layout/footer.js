const footerLinks = [
  {
    name: 'Twitter',
    href: 'https://twitter.com/pmndrs',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
      </svg>
    ),
  },
  {
    name: 'GitHub',
    href: 'https://github.com/pmndrs',
    icon: (props) => (
      <svg fill='currentColor' viewBox='0 0 24 24' {...props}>
        <path
          fillRule='evenodd'
          d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
          clipRule='evenodd'
        />
      </svg>
    ),
  },
  {
    name: 'fathom',
    link: '#',
    icon: (props) => (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 354.358 354.358'
        {...props}
      >
        <g data-name='Group 54' transform='translate(-1313 -363)'>
          <g data-name='Group 51' opacity='0.5' transform='translate(1313 363)'>
            <g clipPath='url(#clip-path)' data-name='Group 31'>
              <path
                fill='#e6eaf2'
                d='M19.652 234.514C-23.349 116.369 1.7 62.653 119.844 19.652S291.7 1.7 334.707 119.843 352.66 291.7 234.514 334.7 62.654 352.66 19.652 234.514'
                data-name='Path 93'
              ></path>
            </g>
          </g>
          <g data-name='Group 20' transform='translate(1400 460)'>
            <g clipPath='url(#clip-path-2)' data-name='Group 19'>
              <path
                fill='#2d3540'
                d='M35.183 4.043h-7.441C21.369 4.058 14.653 5.3 9.187 9.1a20.593 20.593 0 00-6.695 7.714A25.446 25.446 0 000 28.326v106.762a3.685 3.685 0 003.691 3.688h14.536a3.685 3.685 0 003.691-3.688V59.872h13.265a3.685 3.685 0 003.691-3.688V43.727a3.685 3.685 0 00-3.691-3.691H21.918v-9.462a13.076 13.076 0 01.641-4.657 2.916 2.916 0 01.724-1.149 3.269 3.269 0 011.763-.706 25.091 25.091 0 013.821-.18h6.317a3.685 3.685 0 003.691-3.688V7.734a3.685 3.685 0 00-3.691-3.691'
                data-name='Path 71'
                transform='translate(0 7.897)'
              ></path>
              <path
                fill='#2d3540'
                d='M95.42 49.563c.03-9.955-3.81-18.664-10.673-24.617-6.854-5.977-16.478-9.187-27.8-9.184-11.514 0-21.46 3.3-28.722 9.078a31.58 31.58 0 00-12.17 23.513 3.69 3.69 0 003.688 3.86h15.4a3.691 3.691 0 003.677-3.367 12.124 12.124 0 014.982-8.688c3.015-2.3 7.457-3.86 13.144-3.863 5.744.006 9.872 1.565 12.506 3.848a11.945 11.945 0 014.046 9.42v.52a4.709 4.709 0 01-.136 1.27l-.139.319a2.173 2.173 0 01-.957.579 29.063 29.063 0 01-6.364 1.305c-3.116.413-7.17.842-12.22 1.518h.018c-9.269 1.246-18.73 2.761-26.4 7.09a25.456 25.456 0 00-9.542 9.119A28.163 28.163 0 0014.15 85.9a32.376 32.376 0 002.75 13.53 28.018 28.018 0 0013.04 13.377 43.344 43.344 0 0019.742 4.293c8.859.009 15.578-2.052 20.524-5.2a27.166 27.166 0 003.3-2.457v2.757a3.685 3.685 0 003.691 3.688h7.079L95.42 74.411zM73.5 77.594c-.012 5.227-1.6 9.86-4.908 13.221-3.313 3.343-8.549 5.732-16.836 5.756-5.336.009-9.285-1.164-11.644-2.856a8.178 8.178 0 01-2.6-2.921 8.92 8.92 0 01-.927-4.066v-.094a8.394 8.394 0 011.187-4.545c1.1-1.8 3.121-3.328 6.007-4.536A42.159 42.159 0 0154 75.019c5.254-.738 10.658-1.521 15.138-2.4 1.6-.313 3.027-.65 4.368-1z'
                data-name='Path 72'
                transform='translate(27.637 30.786)'
              ></path>
              <path
                fill='#9e98ff'
                d='M106.318 1.445A3.7 3.7 0 00103.389 0H84.871a3.683 3.683 0 00-3.564 2.735L44.6 139.335l-1.81 6.748-2.49 9.267a3.692 3.692 0 003.561 4.65h18.518a3.683 3.683 0 003.564-2.732l41.01-152.619a3.7 3.7 0 00-.635-3.2'
                data-name='Path 73'
                transform='translate(78.457 .003)'
              ></path>
            </g>
          </g>
        </g>
      </svg>
    ),
  },
]

const Footer = () => {
  return (
    <footer className='bg-white'>
      <div className='px-4 py-12 mx-auto max-w-7xl sm:px-6 md:flex md:items-center md:justify-between lg:px-8'>
        <div className='flex justify-center space-x-6 md:order-2'>
          {footerLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className='text-gray-400 hover:text-gray-500'
            >
              <span className='sr-only'>{item.name}</span>
              <item.icon className='w-6 h-6' aria-hidden='true' />
            </a>
          ))}
        </div>
        <div className='mt-8 md:mt-0 md:order-1'>
          <p className='text-base text-center text-gray-400'>
            &copy; {new Date().getFullYear()} pmndrs.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
