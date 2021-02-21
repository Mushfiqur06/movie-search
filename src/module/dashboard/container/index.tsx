import React from 'react';
import Header from '../../core/Header';
import Slider from '../../slider/container';
import Movies from '../components/Movies';

export default function Dashboard() {
	return (
		<>
			<Header />
			<Slider />
			<Movies />
		</>
	);
}
