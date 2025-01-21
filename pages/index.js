import React from 'react';
import Image from 'next/image';
import Logo from '../public/logo.PNG';
import ContactUs from './components/ContactUsform';
import { Button as MuiButton } from '@mui/material';
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
// import MaterialContactform from './components/MaterialContactform';
import Button from '@mui/material/Button';
import Link from 'next/link';
import BaseLayout from './components/layouts/BaseLayouts.js';
import HeroSection from './components/hero/HeroSection';
import Grid from './components/gallery/Grid';




// export default function Index() {
//   const MainStyle = {
//     overflowX: 'hidden',
//   };

//   const companyTitle = {
//     textAlign: 'center',
//     fontFamily: 'avenir',
//   };

//   const copy = {
//     textAlign: 'center',
//     fontSize: '30px',
//     fontFamily: 'avenir',
//   };

//   return (
//     <BaseLayout>
//       <div style={MainStyle}>
//         <React.Fragment>
//           <CssBaseline />
//           <Container maxWidth="lg">
//             <br></br>

//             <center>
//               {/* <Image
//               src={Logo}
//               alt="Description of Image"
//               width={300}
//               height={75}
//             /> */}
//             </center>
//             <br></br>
//             <br></br>

//             <br></br>
//             <center>
//               <HeroSection />
//             </center>

//           </Container>
//         </React.Fragment>
//         <div>

//           <Grid />

//         </div>
//       </div>
//     </BaseLayout>
//   );
// }

export default function Index() {
  const mainStyle = {
    overflowX: 'hidden', // Prevent horizontal overflow
  };

  const companyTitleStyle = {
    textAlign: 'center',
    fontFamily: 'Avenir, sans-serif', // Added fallback font
  };


  return (
    <BaseLayout>
      <div style={mainStyle}>

        <CssBaseline />

        <Container maxWidth="lg">

          <br></br>
          <br></br>

          <div style={companyTitleStyle}></div>

          <div style={{ marginTop: '2rem' }}>
            <HeroSection />
            <Grid />
          </div>

        </Container>

      </div>

    </BaseLayout>
  );
}