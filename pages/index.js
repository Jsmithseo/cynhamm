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



export default function Index() {
  const MainStyle = {
    overflowX: 'hidden',
  };

  const companyTitle = {
    textAlign: 'center',
    fontFamily: 'avenir',
  };

  const copy = {
    textAlign: 'center',
    fontSize: '30px',
    fontFamily: 'avenir',
  };
  return (
    <BaseLayout>
    <div style={MainStyle}>
      <React.Fragment>
        <CssBaseline />
        <Container maxWidth="lg">
          <br></br>
          <br></br>
          <center>
            {/* <Image
              src={Logo}
              alt="Description of Image"
              width={300}
              height={75}
            /> */}
          </center>
          <br></br>
          <br></br>
          <h2 style={companyTitle}>
          Cyn hamm Consulting
          </h2>
          <div style={copy}>
          Unlock Your Potential with Cyn hamm Consulting: Diverse Expertise to Catapult Your Career and Business to New Heights! Join me for transformative public speaking engagements, personalized career coaching, strategic business program planning sessions, professional photography services, and in-depth peer writing reviews. Begin your journey to success with Cyn hamm Consulting today – Where Your Vision Meets Expert Execution.

          </div>
          <br></br>
          <center>
            <Link href="https://calendly.com/cynhamm/30min">
            <Button variant="contained" color="primary" type="submit">
        Schedule Some Time
      </Button>
            </Link>

          </center>

        </Container>
      </React.Fragment>
      <div>

      </div>
    </div>
    </BaseLayout>
  );
}
