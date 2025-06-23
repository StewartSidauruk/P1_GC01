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

const navigation = [
    { name: 'Search', href: '#', icon: MagnifyingGlassIcon, current: false },
    { name: 'Home', href: '#', icon: HomeIcon, current: true },
    { name: 'TV', href: '#', icon: TvIcon, current: false },
    { name: 'Movies', href: '#', icon: FilmIcon, current: false },
    { name: 'Originals', href: '#', icon: StarIcon, current: false },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Navbar() {
    return (
        <Disclosure as="nav" className="sticky top-0 z-50 bg-[#080a14]">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="relative flex h-20 items-center justify-center">
                            <div className="absolute left-0 flex items-center">
                                <img
                                    src={coldstarLogo}
                                    alt="Coldstar"
                                    className="h-13 w-auto"
                                />
                            </div>
                            <div className="absolute left-16 flex items-center sm:hidden">
                                <DisclosureButton className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>

                            <div className="hidden sm:flex items-center space-x-6">
                                {navigation.map((item) => (
                                    <div key={item.name} className="relative group">
                                    <a
                                        href={item.href}
                                        className={classNames(
                                        item.current
                                            ? 'text-white'
                                            : 'text-gray-400 hover:text-white',
                                        'p-1'
                                        )}
                                    >
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </a>
                                    <span className="absolute left-1/2 -translate-x-1/2 mt-2 px-2 py-1 text-xs text-white bg-black rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 whitespace-nowrap">
                                        {item.name}
                                    </span>
                                    </div>
                                ))}
                                <Menu as="div" className="relative">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                                        <span className="sr-only">Open user menu</span>
                                        <img
                                            className="h-9 w-9 rounded-full"
                                            src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                            alt="User"
                                        />
                                        </MenuButton>
                                    </div>
                                    <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                        <MenuItem>
                                            {({ focus }) => (
                                                <a
                                                href="#"
                                                className={classNames(
                                                    focus ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                                >
                                                Your Profile
                                                </a>
                                            )}
                                        </MenuItem>
                                        <MenuItem>
                                            {({ focus }) => (
                                                <a
                                                href="#"
                                                className={classNames(
                                                    focus ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                                >
                                                Settings
                                                </a>
                                            )}
                                        </MenuItem>
                                        <MenuItem>
                                            {({ focus }) => (
                                                <a
                                                href="#"
                                                className={classNames(
                                                    focus ? 'bg-gray-100' : '',
                                                    'block px-4 py-2 text-sm text-gray-700'
                                                )}
                                                >
                                                Sign out
                                                </a>
                                            )}
                                        </MenuItem>
                                    </MenuItems>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <DisclosureButton
                                key={item.name}
                                as="a"
                                href={item.href}
                                className={classNames(
                                    item.current
                                    ? 'bg-gray-900 text-white'
                                    : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                    'flex items-center rounded-md px-3 py-2 text-base font-medium'
                                )}
                                >
                                <item.icon className="h-6 w-6 mr-3" aria-hidden="true" />
                                {item.name}
                                </DisclosureButton>
                            ))}

                            <div className="flex items-center px-3 mt-3">
                                <img
                                    className="h-9 w-9 rounded-full mr-2"
                                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="User"
                                />
                                <span className="text-white text-sm">Username</span>
                            </div>
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
    )
}
