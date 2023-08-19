import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/shared/Card';


function AboutPage() {
  return (
    <Card>
        <h1>THIS IS A REACT APP BY TECH-BRANIS</h1>
        <p>This app is a feedback app</p>
        <p>version V0.0.05</p>
        <Link to="/">Back To Home</Link>
    </Card>
  )
}

export default AboutPage
