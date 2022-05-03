import React from 'react'
import mysql from 'mysql'

export default function Customers({ name }) {
  return <div>customers {name}</div>
}

export async function getServerSideProps() {
  const results = await mysql.query('SELECT ...')
  return {
    props: { name: 'brad' },
  }
}
