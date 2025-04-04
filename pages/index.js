import React from 'react';
import Head from 'next/head';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import DiscoverSection from '../components/DiscoverSection';
import ContractsSection from '../components/ContractsSection';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Jobwhee</title>
        <meta name="description" content="Jobwhee." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <Hero />
        <DiscoverSection />
        <ContractsSection />
      </main>
    </div>
  );
} 