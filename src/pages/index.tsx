import Head from 'next/head';
import Image from 'next/image';
import { Typography } from '@material-ui/core';
export default function Home() {
  console.log('hello');
  return (
    <div className="div">
      <Typography variant="h1">Chuch Norris</Typography>
    </div>
  );
}
