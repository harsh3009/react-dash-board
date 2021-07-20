import React from 'react';
import './style.css';
// import axios from 'axios';
import { BrowserRouter as Link } from 'react-router-dom';
import Display from './Display';
import { Link } from 'react-router-dom';
import logo from './logo.svg';
function Card({ name }) {
  return (
    <>
      <div
        style={{
          backgroundColor: '#e6e6e6',
          padding: 10,
          margin: 'auto',
          // width: '100%',
          // height: '100%',
          borderRadius: 5,
          display: 'flex',
          flexAlign: 'center'
        }}
      >
        <div
          style={{
            // padding: 'auto',
            backgroundColor: '#f3f8fb',
            alignItems: 'center',
            padding: 160,
            display: 'flex',
            margin: 'auto',
            flexAlign: 'center',
            borderRadius: 5,
            width: '100%'
          }}
        >
          <p style={{ color: 'white', margin: 'auto' }} />
        </div>
      </div>
    </>
  );
}
function Button({ name }) {
  return (
    <div
      style={{
        display: 'flex',
        backgroundColor: '#ffd84d',
        width: '80%',
        height: 30,
        padding: 15,
        margin: 10,
        borderRadius: 5
      }}
    >
      <p style={{ color: 'black', margin: 'auto' }}>
        <li>{name}</li>
      </p>
    </div>
  );
}

export default function App() {
  return (
    <div style={{ height: '100vh', overflow: 'hidden' }}>
      <div
        style={{
          height: 50,
          // width: '100%',
          backgroundColor: '#0f0f0f',
          padding: 10,
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <div
          style={{
            borderRadius: 5,
            backgroundColor: '#c41717',
            display: 'flex',
            alignItems: 'center',
            padding: 10
          }}
        >
          <img src={logo} />
        </div>

        <div
          style={{
            display: 'flex',
            height: 50,
            width: 50,
            borderRadius: 1000,
            // padding: 'auto',
            backgroundColor: '#c41717',
            marginLeft: 'auto'
            // marginRight:10
          }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row', width: '100%' }}>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            justifyContent: 'center',
            height: '100%',
            // width: 250,
            backgroundColor: '#72a78d',
            padding: 20
            // alignContent:'center'
          }}
        >
          <Link to="/posts">
            <Button name="Posts" />
          </Link>
          <Link to="/users">
            <Button name="Users" />
          </Link>
          <Link to="/comments">
            <Button name="Comments" />
          </Link>
          <Link to="/photos">
            <Button name="Photos" />
          </Link>
        </div>
        <Display />
      </div>
      {/* Footer */}
      <div
        style={{
          display: 'flex',
          width: '100%',
          height: 50,
          backgroundColor: '#4d58ff',
          padding: 10
        }}
      />
    </div>
  );
}
