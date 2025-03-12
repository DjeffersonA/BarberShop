import '../styles/globals.css';
import { AppProvider } from '@/context/AppContext';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';
import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps){
	return (
		<AppProvider>
			<Header/>
			<main className="min-h-screen">
				<Component {...pageProps} />
			</main>
			<Footer />
		</AppProvider>
	);
}

export default MyApp;