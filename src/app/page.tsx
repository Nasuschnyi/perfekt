'use client';
import '../styles/globals.css';
import Loader from '@/components/UI/Loader/Loader';
import Homepage from './Homepage/Homepage';
import { useEffect, useState } from 'react';

export default function App() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	return loading ? <Loader /> : <Homepage />;
}
