"use client"; // this forces the render to be on the client and not on the server

import config from '@/sanity.config';
import {NextStudio} from 'next-sanity/studio';

export default function AdminPage() {
    return <NextStudio config={config}/>
}