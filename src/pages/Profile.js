import React from 'react'


export function Profile() {
  const storedUsername = sessionStorage.getItem('username');
  return (
    <>
    <h1>{storedUsername}</h1>
    </>
  )
}
