import React from 'react'
import TablePage from '../pages/TablePage';
import { Routes, Route} from 'react-router-dom';
import Cards from '../pages/Cards';
import { motion } from 'framer-motion';

export default function Body() {
  return (
    <>
    <Routes>
        <Route exact path="/" element={<TablePage/>}/>
        <Route exact path="/cards" element={<Cards/>}/>
    </Routes>
    </>
  )
}
