import Header from './components/header';
import Footer from './components/footer';
import MainPage from './pages/main/page';

const App = () => {
	return (
		<div className='bg'>
			<Header />
			<MainPage />
			<Footer/>
		</div>
	);
}

export default App;
