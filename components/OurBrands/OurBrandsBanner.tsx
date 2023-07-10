import Image from 'next/image'
import React from 'react'

type Props = {}

export  function OurBrandsBanner({}: Props) {
  return (
    <section className='pt-[100px] bg-white'>
        <div className='container flex flex-col justify-between gap-8 px-8 pt-12 pb-16 lg:px-0 lg:items-center lg:flex-row'>
            <div className='w-full h-auto bg-center bg-no-repeat bg-cover lg:min-h-[390px] flex flex-col justify-center' style={{backgroundImage:`url('/svg/bg-ourbrands.svg')`}}>
                <div className='text-3xl font-semibold uppercase text-primary lg:text-5xl'>our brands</div>
                <p className='text-xl font-light text-black'>Our brands: BaiTong Hotel & Resort, SOOKDAL Korean Restaurant, Melo Western Restaurant</p>
            </div>
            <Image
                src={"/images/banner/our-brand-banner.png"}
                className='rounded-lg'
                alt='banner our brand'
                width={488}
                height={318}
            />
        </div>
    </section>
  )
}