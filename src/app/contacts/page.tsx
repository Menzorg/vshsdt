'use client';

import { Flex, Box } from '@chakra-ui/react';
import Footer from '../../components/footer';
import Header from '../../components/header';
import { PageGrid } from '@/components/page-grid';
import { Address } from '../../components/address';

import data from "./page-data.json";

export default function Home() {
  return (
  <Flex direction="column">
    <Header pageName="Контакты"/>
      <Box p="6rem 2rem 1rem">
        <Address/>
        <PageGrid { ...data } breadcrumbs={[{text: 'Контакты'}]} />
      </Box>
    <Footer/>
  </Flex>
  )
}
