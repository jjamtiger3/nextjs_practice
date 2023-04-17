import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./header";
import Side from "./side";
import Main from "./main";
import dynamic from 'next/dynamic';

export default function Mail() {
  return (
    <>
      <Header></Header>
      <Side></Side>
      <Main></Main>
    </>
  )
}