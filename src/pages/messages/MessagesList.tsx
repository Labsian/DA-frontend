import React, { useState } from 'react'
import { MsgPreview } from './MsgPreview'
import { Scrollbar } from './../../components/scrollbar';

export const MessagesList = () => {

      const [profiles, setProfiles] = useState([
        { name: "Emily", story: false, url: "/assets/girl1.svg" },
        { name: "Anna", story: true, url: "/assets/girl2.svg" },
        { name: "Sophie", story: true, url: "/assets/girl3.svg" },
        { name: "Emily", story: true, url: "/assets/girl1.svg" },
        { name: "Anna", story: true, url: "/assets/girl2.svg" },
        { name: "Sophie", story: true, url: "/assets/girl3.svg" },
        { name: "Emily", story: true, url: "/assets/girl1.svg" },
        { name: "Anna", story: true, url: "/assets/girl2.svg" },
        { name: "Sophie", story: true, url: "/assets/girl3.svg" },
      ]);
  return (
<Scrollbar  sx={{ height: "calc(100vh - 360px)" }}>
        <div className='mt-4 w-full'>
        {profiles.map((profile,index)=>(
            <MsgPreview profile={profile}/>
        ))}
    </div>
</Scrollbar>
  )
}
