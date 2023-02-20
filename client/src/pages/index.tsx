import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import Hero from '../components/Hero/Hero'
import Categories from '@/components/Categories/Categories'
import ShopPreview from '@/components/ShopPreview/ShopPreview'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className='font-roboto flex flex-col gap-12'>
        <Hero />
        <div className='flex flex-col gap-8 px-[50px]'>
          <Categories />
          <ShopPreview />
        </div>
      </main>
    </>
  )
}
