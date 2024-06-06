'use client';

import client from '@/lib/client';
import EmailIcon from '@/public/svgs/EmailIcon'
import Image from 'next/image';
import React, { useEffect, useState } from 'react'


const NewsLetter = () => {
    const [emailAdress, setEmailAdress] = useState('');
    const [firstImages, setfirstImages] = useState('');
    const [secondImages, setSecondImages] = useState('');
    const [signedUp, setSignedUp] = useState(false);


    const PostToEmailList = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

        if (emailAdress) {
            setSignedUp(true);
        }
        setEmailAdress('');
    }

    useEffect(() => {
        window.addEventListener('input', () => {
            setSignedUp(false);
        });

        return () => {
            window.removeEventListener('input', () => {
                setSignedUp(false);
            });
        };
    }, [])

    useEffect(() => {
        const heroQuery = `*[_type == "herosection"][]{
                "imageUrl": image[0].asset->url,
                }`
        client.fetch(heroQuery).then(
            (res) => {
                setfirstImages(res[0].imageUrl);
                // console.log(res[0].imageUrl);
            }
        )
        const productQuery = `*[_type == "products"][]{
                "imageUrl": image[0].asset->url,
                }`
        client.fetch(productQuery).then(
            (res) => {
                setSecondImages(res[7].imageUrl)
                // console.log(res[0].imageUrl);
            }
        )
    }, [])
    return (
        <div className='flex flex-row justify-center items-center gap-16 w-auto h-[22.5rem] bg-[#E2E4E3]'>
            {secondImages && (<Image src={secondImages} alt='ads photo' width={1000} height={1000} className='w-auto h-[20rem] rotate-[-26deg]' />)}
            <div className='flex flex-col justify-center items-center gap-4'>
                <p className='font-semibold text-3xl'>Join Our Newsletter</p>
                <p className='mb-[1rem]'>Sign up for deals, new products and promotions</p>
                <form
                    action="submit"
                    onSubmit={PostToEmailList}
                >
                    <div className='flex flex-row justify-between items-center h-[3rem] w-[30.5rem] border-b border-[#343839]'>
                        <EmailIcon />
                        <input
                            className='border-none rounded-sm box-border 
                            outline-none ml-4 mr-auto bg-transparent focus 
                            w-auto h-auto flex flex-row justify-between gap-2 '
                            type="text"
                            placeholder='Email address'
                            value={emailAdress}
                            onChange={(e) => setEmailAdress(e.target.value)}
                            name="emailSignUp"
                        />
                        <button type="submit">Signup</button>
                    </div>
                </form>
                <div className='w-auto h-[3rem] font-semibold text-[#FF5630] self-start'>
                    {signedUp && <div>Thank You For Signing In</div>}
                </div>
            </div>
            <div className='mt-auto'>
                {firstImages && (<Image src={firstImages} alt='ads photo' width={2000} height={2000} className='w-auto h-[20rem]' />)}
            </div>
        </div>
    )
}

export default NewsLetter