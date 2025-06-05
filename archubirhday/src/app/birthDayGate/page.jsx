// 'use client';

// import React from 'react';
// import './BirthdayGate.css'; 
// import { Container } from 'react-bootstrap';

// function BirthdayGate() {
//   return (
//     <Container>
//     <div className="birthday-gate-wrapper">
//       <div></div>
//       <div className="video-card">
//         <video
//           className="birthday-video"
//           autoPlay
//           controls
//           muted
//         >
//           <source src="/archanaBirthDay/birthDay.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>
//       </div>
//       <div></div>
//     </div>
//     </Container>
//   );
// }

// export default BirthdayGate;

'use client';

import React from 'react';
import './BirthdayGate.css'; 
import { Container } from 'react-bootstrap';

function BirthdayGate() {
  return (
    <Container>
      <div className="birthday-gate-wrapper">
        <div className="sparkle-container left-sparkles"></div>

        <div className="video-card">
          <video className="birthday-video" autoPlay controls muted>
            <source src="/archanaBirthDay/birthDay.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className="sparkle-container right-sparkles"></div>
      </div>
    </Container>
  );
}

export default BirthdayGate;

