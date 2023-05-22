"use client";
import React, { useEffect, useState } from 'react';
import './Cards.scss';
import axios from 'axios';
import Link from 'next/link';

const client = axios.create({
  baseURL: `/api/data` 
});

export default function Card() {

const [data, setData] = useState(null);

useEffect(() => {
  async function getPost() {
    const response = await client.get(``);
    setData(response.data);
  }
  getPost();
}, []);

if (!data) return null;
  return (
      <div>
        <div className="box-card">
          {data.map(item =>(
            <Link className='cards' key={item.id} href={`/lodging/${item.id}`}>
              <img src={item.cover} className='cards-img'/><div className='overlay'></div>
              <p className='text-cards'>{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
  )
}
