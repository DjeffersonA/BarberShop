import Link from 'next/link';
import { useState } from 'react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useAppContext } from '@/context/AppContext';

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);
	const { barberShopName } = useAppContext();

	return (
		<header className="bg-blue-600 text-white p-4">
			<div className="max-w-7xl mx-auto flex justify-between items-center">
				<div>
					<h1 className="text-2xl font-semibold">{barberShopName}</h1>
				</div>
				<div className="lg:hidden">
					<button onClick={() => setMenuOpen(!menuOpen)}>
						{menuOpen ? (
							<XMarkIcon className="w-6 h-6 text-white" />
						) : (
							<Bars3Icon className="w-6 h-6 text-white" />
						)}
					</button>
				</div>
				<nav className={`lg:flex space-x-6 ${menuOpen ? 'block' : 'hidden'}`}>
					<ul className="flex space-x-6">
						<li><Link href="/">Home</Link></li>
						<li><Link href="/services">Services</Link></li>
						<li><Link href="/appointments">Appointments</Link></li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Header;