/* eslint-disable */

import { useSession, signIn, signOut } from 'next-auth/react'
import os from 'os';
export default function Component() {
  const { data: session, status } = useSession()
  if (session) {
    return (
      <div className="flamecenter">
        <style jsx>
        {`
            .flamecenter {
                padding-top: 150px;
                display: flex;
                justify-content: center;
                align-self: center;
                flex-direction: column;
              }
              
              .flamecenter p {
                text-align: center;
                font-size: 24px;
              }
              
              .flamecenter button {
                width: 150px;
                margin: 0 auto;
              }
        `}
        </style>
        <p>Signed in as {session.user.email} </p>
        <br />
        <p>Username: {session.user.username} </p>
        <br />
        <p>User ID: {session.user.userid} </p>
        <br />
        <p>Profile UUID: {session.user.profile_uuid === '' ? 'Empty' : session.user.profile_uuid} </p>
        <br />
        <button onClick={() => signOut()}>Sign out</button>
      </div>
    )
  }

  if (status === 'loading') {
    return (
      <div className="flamecenter">
        <style jsx>
        {`
            .flamecenter {
                padding-top: 150px;
                display: flex;
                justify-content: center;
                align-self: center;
                flex-direction: column;
              }
              
              .flamecenter p {
                text-align: center;
                font-size: 24px;
              }
              
              .flamecenter button {
                width: 150px;
                margin: 0 auto;
              }
        `}
        </style>
        <p>Loading... </p>
      </div>
    )
  }
  return (
    <div className="flamecenter">
        <style jsx>
        {`
            .flamecenter {
                padding-top: 150px;
                display: flex;
                justify-content: center;
                align-self: center;
                flex-direction: column;
              }
              
              .flamecenter p {
                text-align: center;
                font-size: 24px;
              }
              
              .flamecenter button {
                width: 150px;
                margin: 0 auto;
              }
        `}
        </style>
      <p>Not signed in </p>
      <br />
      <button onClick={() => signIn()}>Sign in</button>
    </div>
  )
}

export async function getServerSideProps() {
  console.log("Running on", os.hostname())

  return {
    props: {}
  }
}