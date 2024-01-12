// pages/contact.js

import Head from 'next/head';
import ContactForm from '../components/ContactForm';



export default function Contact() {
  return (
    <div>
    <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  </Head>
    <div>
    
      <ContactForm />
    </div>
    </div>
  );
}
