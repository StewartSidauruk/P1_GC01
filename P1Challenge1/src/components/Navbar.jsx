import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
} from '@headlessui/react'

import {
    Bars3Icon,
    XMarkIcon,
    MagnifyingGlassIcon,
    HomeIcon,
    TvIcon,
    StarIcon,
} from '@heroicons/react/24/outline'
import { FilmIcon } from '@heroicons/react/24/solid'
import coldstarLogo from '../assets/img/coldstar.png'
import { Link, useLocation } from 'react-router-dom';

const navigation = [
    { name: 'Search', href: '/search', icon: MagnifyingGlassIcon },
    { name: 'Home', href: '/', icon: HomeIcon },
    { name: 'TV', href: '/tv', icon: TvIcon },
    { name: 'Movies', href: '/movies', icon: FilmIcon },
    { name: 'Favorite', href: '/favorite', icon: StarIcon },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    const location = useLocation();

    return (
        <Disclosure as="nav" className="sticky top-0 z-50 bg-[#080a14]">
            {({ open }) => (
                <>
                    <div className="relative flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center">
                            <img
                                src={coldstarLogo}
                                alt="Coldstar"
                                className="h-13 w-auto ml-8"
                            />
                        </div>
                        <div className="absolute right-8 flex items-center sm:hidden">
                            <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                <span className="sr-only">Open main menu</span>
                                {open ? (
                                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                ) : (
                                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                )}
                            </DisclosureButton>
                        </div>

                        <div className="hidden sm:flex items-center space-x-6 absolute left-1/2 -translate-x-1/2">
                            {navigation.map((item) => {
                            const isActive = location.pathname === item.href;
                                return (
                                    <div key={item.name} className="relative group">
                                    <Link to={item.href} className={classNames( isActive ? 'text-white' : 'text-gray-400 hover:text-white', 'p-1' )}>
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </Link>
                                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                                        {item.name}
                                    </span>
                                    </div>
                                );
                            })}
                            <Menu as="div" className="relative">
                                <div>
                                    <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                    <span className="sr-only">Open user menu</span>
                                    <img
                                        className="h-9 w-9 rounded-full"
                                        src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/feature/profile/5.png"
                                        alt="User"
                                    />
                                    </MenuButton>
                                </div>
                                <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                    <MenuItem>
                                        {({ focus }) => (
                                            <a href="#" className={classNames(focus ? 'bg-gray-100' : '','block px-4 py-2 text-sm text-gray-700')}>
                                                Your Profile
                                            </a>
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ focus }) => (
                                            <a href="#" className={classNames(focus ? 'bg-gray-100' : '','block px-4 py-2 text-sm text-gray-700')}>
                                                Settings
                                            </a>
                                        )}
                                    </MenuItem>
                                    <MenuItem>
                                        {({ focus }) => (
                                            <a href="#" className={classNames(focus ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}>
                                                Sign out
                                            </a>
                                        )}
                                    </MenuItem>
                                </MenuItems>
                            </Menu>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden bg-[#080a14] px-4 pt-4 pb-6">
                        <div className="flex flex-col space-y-4">
                            {navigation.map((item) => {
                            const isActive = location.pathname === item.href;
                                return (
                                    <Link
                                    key={item.name}
                                    to={item.href}
                                    className={classNames( isActive ? 'bg-gray-800 text-white' : 'text-gray-400 hover:text-white hover:bg-gray-700','flex items-center px-4 py-2 rounded-md text-base font-medium transition duration-150')}>
                                    <item.icon className="h-6 w-6 mr-3" aria-hidden="true" />
                                    {item.name}
                                    </Link>
                                );
                            })}

                            <div className="flex items-center px-4 pt-4 border-t border-gray-700">
                            <img className="h-9 w-9 rounded-full mr-3" src="https://img1.hotstarext.com/image/upload/w_200,h_200,c_fill/feature/profile/5.png" alt="User"/>
                            <span className="text-white text-sm font-medium">Username</span>
                            </div>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}
