"use client";

import { getAllCollectionNfts } from '@/actions/getAllCollectionNfts';
import { REQUEST_STALE_TIME } from '@/lib/constants';
import { useQuery } from '@tanstack/react-query';

export const useGetAllCollectionNfts = (collectionId: string) => {
	const { status, data, error } = useQuery({
		queryKey: ['getAllCollectionNfts', collectionId],
		queryFn: async () => {
			const nfts = await getAllCollectionNfts(collectionId);
			return nfts;
		},
		staleTime: REQUEST_STALE_TIME,
	});
	return { status, data, error };
};