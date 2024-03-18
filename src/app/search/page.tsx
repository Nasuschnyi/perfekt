'use client';
import Loader from '@/components/UI/Loader/Loader';
import { useEffect, useState } from 'react';
import SearchPage from './SearchPage';

export default function Search() {
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => setLoading(false), 1000);
		return () => clearTimeout(timer);
	}, []);

	return loading ? <Loader /> : <SearchPage />;
}
