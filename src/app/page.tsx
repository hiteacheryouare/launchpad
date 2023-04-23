'use client';
import { Data } from '@typescript/types';
import Image from 'next/image'
import { useState } from 'react';

export default async function Home() {
  const [data, setData] = useState<Data>({
    name: '',
    description: ""
  });
  return (
    <>
      <form>
        <label className='form-label' htmlFor="name">Name</label>
        <input type="text" name="name" id="name" className='border-2 form-control' onChange={(e) => {setData({...data, name: e.target.value})}} />
      </form>
      <div className='mt-4'>
        <a href={`/view?name=${data.name}`} className="btn btn-primary">view da result</a>
      </div>
    </>
  )
}
