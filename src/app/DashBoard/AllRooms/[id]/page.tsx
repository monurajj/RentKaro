'use client'
import { useParams } from "next/navigation";
import data from '../../../../../data.json';
import React from 'react';
import RoomsDetails from '../../../../components/RoomDetails';

export default function RoomsDetailsPage() { 
    const params = useParams();
    const room = data.find((item) => item.id === params.id); // Use strict equality (===)

    return (
        <div className="w-full bg-blue-100 p-4 md:p-8">
            <RoomsDetails room={room} />
        </div>
    );
}
