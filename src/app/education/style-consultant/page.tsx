'use client';

import { Flex, Text, Box, Link } from '@chakra-ui/react';
import Footer from '@/app/footer';
import Header from '@/app/header';
import { PageGrid } from '@/app/course/page-grid';

import data from "./page-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header breadcrumbs={[{text: 'Коммерческое образование', href: "/education"}, {text: 'Консультант по стилю'}]} />
    <PageGrid { ...data } />
    <Footer/>
  </Flex>
  )
}
