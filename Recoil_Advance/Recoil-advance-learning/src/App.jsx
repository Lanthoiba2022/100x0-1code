import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { jobsAtom, messagingAtom, networkAtom, notificationsAtom, totalNotificationSelector } from './atoms'

function App() {
 return <RecoilRoot>
  <MainApp />
 </RecoilRoot>
}

function MainApp(){
  const networkNotificationCount = useRecoilValue(networkAtom)
  const jobsAtomCount = useRecoilValue(jobsAtom)
  const messagingAtomCount = useRecoilValue(messagingAtom)
  const notificationsAtomCount = useRecoilValue(notificationsAtom)
  const totalNotificationSelectorCount = useRecoilValue(totalNotificationSelector)
  return (
    <>
      <button>Home</button>


      <button>My Network ({networkNotificationCount >= 100? "99+" : networkNotificationCount})</button>
      <button>Jobs ({jobsAtomCount})</button>
      <button>Messaging ({messagingAtomCount})</button>
      <button>Notifications ({notificationsAtomCount})</button>

      <button>Me ({totalNotificationSelectorCount})</button>
      
    </>
  )
}

// function ButtonUpdater(){
//   const setmessagingAtomCount = useSetRecoilState(messagingAtom)
//      return <button onClick={() => {
//       setmessagingAtomCount(c => c + 1)
//     }}>Me</button>
// }

export default App
