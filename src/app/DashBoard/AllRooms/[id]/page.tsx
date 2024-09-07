'use client'
import { useParams } from "next/navigation";
import data from '../../../../../data.json'
import React from 'react';
import Image from 'next/image';
import { Star, MapPin, Users, Calendar, Clock, DollarSign, Wifi, Tv, Dumbbell, Coffee, Award } from 'lucide-react';
import RoomsDetails from '../../../../components/RoomDetails'


export default function roomsDetails(){
    const params = useParams();
    const room = data.find((item)=>item.id==params.id)
    console.log(room);
    return (
       <>
       <div className="w-full bg-blue-100 p-4 md:p-8">

          <RoomsDetails room={room}></RoomsDetails>
       </div>
       </>
    );
}
