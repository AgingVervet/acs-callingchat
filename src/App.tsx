/*
import { ChatClient } from '@azure/communication-chat';
import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from '@azure/communication-common';
import {
  CallComposite,
  ChatComposite,
  fromFlatCommunicationIdentifier,
  useAzureCommunicationCallAdapter,
  useAzureCommunicationChatAdapter
} from '@azure/communication-react';
import { initializeIcons } from '@fluentui/react';
import React, { CSSProperties, useEffect, useMemo, useRef, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
*/
/**
 * Authentication information needed for your client application to use
 * Azure Communication Services.
 *
 * For this quickstart, you can obtain these from the Azure portal as described here:
 * https://docs.microsoft.com/en-us/azure/communication-services/quickstarts/identity/quick-create-identity
 *
 * In a real application, your backend service would provide these to the client
 * application after the user goes through your authentication flow.
 */

/*
const ENDPOINT_URL = 'https://acs-webcalling-dire.africa.communication.azure.com/';
const USER_ID = '8:acs:3dcc571c-de92-48d8-9a1a-a7d3470c24cc_00000026-4a0f-ce71-3f82-af3a0d00fbaf';
const TOKEN = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkY1M0ZEODA0RThBNDhBQzg4Qjg3NTA3M0M4MzRCRDdGNzBCMzBENDUiLCJ4NXQiOiI5VF9ZQk9pa2lzaUxoMUJ6eURTOWYzQ3pEVVUiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjNkY2M1NzFjLWRlOTItNDhkOC05YTFhLWE3ZDM0NzBjMjRjY18wMDAwMDAyNi00YTBmLWNlNzEtM2Y4Mi1hZjNhMGQwMGZiYWYiLCJzY3AiOjE3OTIsImNzaSI6IjE3NDIzMTY5MDciLCJleHAiOjE3NDI0MDMzMDcsInJnbiI6InphIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiM2RjYzU3MWMtZGU5Mi00OGQ4LTlhMWEtYTdkMzQ3MGMyNGNjIiwicmVzb3VyY2VMb2NhdGlvbiI6ImFmcmljYSIsImlhdCI6MTc0MjMxNjkwN30.kzyzdW4LVoThiyx5DephIgRsmMHLLAeeL0OKf7ymi6Hs-vvTGI28almyiH5xWhskjRYeDFZYat5qetU1cQi2cf4g_yBqCTs4U2ib-NZpgEn-Zb0BbiLNDDQ0KCRfuOvgYI7zZ2wbeHnVH0XcbbfgckpetiXLCyM-B_cmc9mVfzFK_KMvWTIjTfjtF6ep1pHvbTigE7Vb3be7qlJy3eAS6vfzZks-phOrZ3vboYZ4j5xvzdrd2pj_93vvdHxGbeaWWzHJWXhpUFQuHgvlR1TAtzzvnIGPb_RcoIrl6b79HkZ4drzgESyULGDqWz82RXowdQAzSaaLoC5xQ_qacoB4wA';
*/

/**
 * Display name for the local participant.
 * In a real application, this would be part of the user data that your
 * backend services provides to the client application after the user
 * goes through your authentication flow.
 */

//const DISPLAY_NAME = 'Field Technician';

/**
 * By default, the `richTextEditorEnabled` is set to false,
 * which means the plain text editor will be used for the SendBox component and the MessageThread component's edit function.
 * Change this value to true to use the Rich Text Editor instead,
 * which provides rich text formatting, table inserting etc.
 * Note that inserting inline images is not enabled for this Quickstart.
 * Please use the `ui-library-quickstart-teams-interop-meeting-chat` Quickstart to try out the inline image inserting function.
 * https://github.com/Azure-Samples/communication-services-javascript-quickstarts/tree/main/ui-library-quickstart-teams-interop-meeting-chat
 */

/*
const richTextEditorEnabled = false;

initializeIcons();
*/

/**
 * Entry point of your application.
 */

/*
function App(): React.JSX.Element {
  // Arguments that would usually be provided by your backend service or
  // (indirectly) by the user.
  const { endpointUrl, userId, token, displayName, groupId, threadId } = useAzureCommunicationServiceArgs();

  // A well-formed token is required to initialize the chat and calling adapters.
  const credential = useMemo(() => {
    try {
      return new AzureCommunicationTokenCredential(token);
    } catch {
      console.error('Failed to construct token credential');
      return undefined;
    }
  }, [token]);
*/
 
  
  // Memoize arguments to `useAzureCommunicationCallAdapter` so that
  // a new adapter is only created when an argument changes.

/*
  const callAdapterArgs = useMemo(
    () => ({
      userId: fromFlatCommunicationIdentifier(userId) as CommunicationUserIdentifier,
      displayName,
      credential,
      locator: {
        groupId
      }
    }),
    [userId, credential, displayName, groupId]
  );
  const callAdapter = useAzureCommunicationCallAdapter(callAdapterArgs);
*/

  // Memoize arguments to `useAzureCommunicationChatAdapter` so that
  // a new adapter is only created when an argument changes.

/*
  const chatAdapterArgs = useMemo(
    () => ({
      endpoint: endpointUrl,
      userId: fromFlatCommunicationIdentifier(userId) as CommunicationUserIdentifier,
      displayName,
      credential,
      threadId
    }),
    [endpointUrl, userId, displayName, credential, threadId]
  );
  const chatAdapter = useAzureCommunicationChatAdapter(chatAdapterArgs);

  if (!!callAdapter && !!chatAdapter) {
    return (
      <div style={{ height: '100vh', display: 'flex' }}>
        <div style={containerStyle}>
          <ChatComposite adapter={chatAdapter} options={{ richTextEditor: richTextEditorEnabled }} />
        </div>
        <div style={containerStyle}>
          <CallComposite adapter={callAdapter} />
        </div>
      </div>
    );
  }
  if (credential === undefined) {
    return <h3>Failed to construct credential. Provided token is malformed.</h3>;
  }
  return <h3>Initializing...</h3>;
}
*/

/*
const containerStyle: CSSProperties = {
  border: 'solid 0.125rem olive',
  margin: '0.5rem',
  width: '50vw'
};
*/

/**
 * This hook returns all the arguments required to use the Azure Communication services
 * that would be provided by your backend service after user authentication
 * depending on the user-flow (e.g. which chat thread to use).
 */

/*
function useAzureCommunicationServiceArgs(): {
  endpointUrl: string;
  userId: string;
  token: string;
  displayName: string;
  groupId: string;
  threadId: string;
} {
  const [threadId, setThreadId] = useState('');
  // For the quickstart, create a new thread with just the local participant in it.
  useEffect(() => {
    (async () => {
      const client = new ChatClient(ENDPOINT_URL, new AzureCommunicationTokenCredential(TOKEN));
      const { chatThread } = await client.createChatThread(
        {
          topic: 'Field Ops'
        },
        {
          participants: [
            {
              id: fromFlatCommunicationIdentifier(USER_ID),
              displayName: DISPLAY_NAME
            }
          ]
        }
      );
      setThreadId(chatThread?.id ?? '');
    })();
  }, []);

  // For the quickstart, generate a random group ID.
  // The group Id must be a UUID.
  const groupId = useRef(uuidv4());

  return {
    endpointUrl: ENDPOINT_URL,
    userId: USER_ID,
    token: TOKEN,
    displayName: DISPLAY_NAME,
    groupId: groupId.current,
    threadId
  };
}
*/


///  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>





import React from 'react';
import { CallWithChatExperience } from './components/CallWithChatExperience';
import { createCallWithChat } from './server';


// Example usage
const setupCallWithChat = async () => {
  // createCallWithChat('User Access Token', 'Identity', 'Endpoint', 'Display Name')
  const result = await createCallWithChat('eyJhbGciOiJSUzI1NiIsImtpZCI6IkY1M0ZEODA0RThBNDhBQzg4Qjg3NTA3M0M4MzRCRDdGNzBCMzBENDUiLCJ4NXQiOiI5VF9ZQk9pa2lzaUxoMUJ6eURTOWYzQ3pEVVUiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjE1ZTRhNzYxLTRkNDctNGFlYi05Mzc2LWUxY2Y3YjAyYzMyNV8wMDAwMDAyNi1iM2ZlLTI3NWMtOGVkMy00OTNhMGQwMDllYTIiLCJzY3AiOjE3OTIsImNzaSI6IjE3NDQwOTQxMzUiLCJleHAiOjE3NDQxODA1MzUsInJnbiI6InphIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiMTVlNGE3NjEtNGQ0Ny00YWViLTkzNzYtZTFjZjdiMDJjMzI1IiwicmVzb3VyY2VMb2NhdGlvbiI6ImFmcmljYSIsImlhdCI6MTc0NDA5NDEzNX0.AcV5qc0pfAHsxMWUyNOuaU84nTPYf-IBKlwFYzE0qYZVnrWJuz6X4MRECxgIVUuCeoUbkygvu_K6H0Zrba_tBJGuMmOjijpMCsjscKQVMW9yBY8VVkrwyJORt1rXVjm2InLgFgEwjtOfw2YSESCvITgyAl4TGZ9SfnPnakT9NcB2E34qaIsTL8KZWhZtnLddrisKoLVNUVi592VxoG727xRhCecRqoFF7C2oT72vyXqwRp6K41diXvB9dy69vMXf1AeV83r-yFUI0evsayXKxSRT6KCLBtBi8fOq62D9WNnSye7oUycvKGaKccaqjvc-Wk412YgShy2mTIpTER-EAg', 
    '8:acs:15e4a761-4d47-4aeb-9376-e1cf7b02c325_00000026-b3fe-275c-8ed3-493a0d009ea2', 
    'https://acs-demo-001.africa.communication.azure.com/', 
    'Patrick (Field Tech)');
  console.log(result);
};

setupCallWithChat();


const App = () => {
  const props = {
    userId: { communicationUserId: '8:acs:15e4a761-4d47-4aeb-9376-e1cf7b02c325_00000026-b3fe-275c-8ed3-493a0d009ea2' },
    token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkY1M0ZEODA0RThBNDhBQzg4Qjg3NTA3M0M4MzRCRDdGNzBCMzBENDUiLCJ4NXQiOiI5VF9ZQk9pa2lzaUxoMUJ6eURTOWYzQ3pEVVUiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjE1ZTRhNzYxLTRkNDctNGFlYi05Mzc2LWUxY2Y3YjAyYzMyNV8wMDAwMDAyNi1iM2ZlLTI3NWMtOGVkMy00OTNhMGQwMDllYTIiLCJzY3AiOjE3OTIsImNzaSI6IjE3NDQwOTQxMzUiLCJleHAiOjE3NDQxODA1MzUsInJnbiI6InphIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiMTVlNGE3NjEtNGQ0Ny00YWViLTkzNzYtZTFjZjdiMDJjMzI1IiwicmVzb3VyY2VMb2NhdGlvbiI6ImFmcmljYSIsImlhdCI6MTc0NDA5NDEzNX0.AcV5qc0pfAHsxMWUyNOuaU84nTPYf-IBKlwFYzE0qYZVnrWJuz6X4MRECxgIVUuCeoUbkygvu_K6H0Zrba_tBJGuMmOjijpMCsjscKQVMW9yBY8VVkrwyJORt1rXVjm2InLgFgEwjtOfw2YSESCvITgyAl4TGZ9SfnPnakT9NcB2E34qaIsTL8KZWhZtnLddrisKoLVNUVi592VxoG727xRhCecRqoFF7C2oT72vyXqwRp6K41diXvB9dy69vMXf1AeV83r-yFUI0evsayXKxSRT6KCLBtBi8fOq62D9WNnSye7oUycvKGaKccaqjvc-Wk412YgShy2mTIpTER-EAg',
    displayName: 'Patrick (Field Tech)',
    endpointUrl: 'https://acs-demo-001.africa.communication.azure.com/',
    locator: { meetingLink: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZDZhMmIyMmItMWZkMi00Mjc2LWE2N2EtODgxMzk3OWU4NmU4%40thread.v2/0?context=%7b%22Tid%22%3a%222fd3c5d5-ddb2-4ed3-9803-f89675928df4%22%2c%22Oid%22%3a%22196f1e8d-758f-4e2c-8e51-599a781b9f67%22%7d' },
    fluentTheme: undefined,
    rtl: false,
    compositeOptions: undefined,
    callInvitationURL: undefined,
    formFactor: undefined//'desktop'

    /*
    const [message, setMessage] = useState('');
    const [userId, setUserId] = useState('');
    const [token, setToken] = useState('');
    const [teamsMeetingLink, setTeamsMeetingLink] = useState('');

    useEffect(() => {
      const init = async () => {
        setMessage('Getting ACS user');
        //call AZure Function to get the ACS user identity and token
        let res = await fetch(process.env.REACT_APP_ACS_USER_FUNCTION as string);
        let user = await res.json();
        setUserId(user.userId);
        setToken(user.token);
  
        
        setMessage('Getting Teams meeting link...');
        // Call Azure Function to get the meeting link
        res = await fetch(process.env.REACT_APP_TEAMS_MEETING_FUNCTION as string);
        let link = await res.text();
        setTeamsMeetingLink(link);
        setMessage('');
        console.log('Teams meeting link', link);
        
      };
      init();
    }, []);
    */
  };



  return <CallWithChatExperience {...props} />;
};


export default App;



/*
import React, { useState, useEffect } from 'react';
import { CallWithChatExperience } from './components/CallWithChatExperience';
import { createCallWithChat } from './server';


// Example usage
const setupCallWithChat = async () => {
  try {
  // createCallWithChat('User Access Token', 'Identity', 'Endpoint', 'Display Name')
  const result = await createCallWithChat('eyJhbGciOiJSUzI1NiIsImtpZCI6IkY1M0ZEODA0RThBNDhBQzg4Qjg3NTA3M0M4MzRCRDdGNzBCMzBENDUiLCJ4NXQiOiI5VF9ZQk9pa2lzaUxoMUJ6eURTOWYzQ3pEVVUiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjE1ZTRhNzYxLTRkNDctNGFlYi05Mzc2LWUxY2Y3YjAyYzMyNV8wMDAwMDAyNi1hZDk0LWU1YTAtNWI0Mi1hZDNhMGQwMDFlYjAiLCJzY3AiOjE3OTIsImNzaSI6IjE3NDM5ODY1NzMiLCJleHAiOjE3NDQwNzI5NzMsInJnbiI6InphIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiMTVlNGE3NjEtNGQ0Ny00YWViLTkzNzYtZTFjZjdiMDJjMzI1IiwicmVzb3VyY2VMb2NhdGlvbiI6ImFmcmljYSIsImlhdCI6MTc0Mzk4NjU3M30.IYJn-8ytT8tp6dmV-uUwj8_eP0mhTxcWZtKtLxw0kRRSVBPwXN7P3LwfpV9a-sU4Q_Z1Coa1jJXPRE2b0YsXEnPKQSMgRn2pil1-Rgc4rnTssaveub7CBwQ_HHl9DBYwztyLcrMAQDVx5f7uZDuUm7Q85PIuziLL-CuZdszGgVQm1Hds7G08P9kPp03oZY4ATH41zNh2wU682sayRS8fhCCEIegIJAodCE8Sl19DRGBxCdfyB2j_n9BgGqYI0EkaCK89oXV4WTdMpjp1M_DpfTHwtWe-riyQonnrzOhy0iduTFRcPCUaafkBitT1fQYelPxSy8J4c6knqSUsXHRuzw', 
    '8:acs:15e4a761-4d47-4aeb-9376-e1cf7b02c325_00000026-ad94-e5a0-5b42-ad3a0d001eb0', 
    'https://acs-demo-001.africa.communication.azure.com/', 
    'Patrick (Field Tech)');
  console.log(result);
  } catch (error) {
    //console.error('Error setting up call with chat:', error);
  }
};

setupCallWithChat();


const App = () => {
  
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');
  const [token, setToken] = useState('');
  const [teamsMeetingLink, setTeamsMeetingLink] = useState('');
  
  useEffect(() => {
    const init = async () => {
      setMessage('Getting ACS user');
      //call AZure Function to get the ACS user identity and token
      let res = await fetch(process.env.REACT_APP_ACS_USER_FUNCTION as string);
      let user = await res.json();
      setUserId(user.userId);
      setToken(user.token);

      
      setMessage('Getting Teams meeting link...');
      // Call Azure Function to get the meeting link
      res = await fetch(process.env.REACT_APP_TEAMS_MEETING_FUNCTION as string);
      let link = await res.text();
      setTeamsMeetingLink(link);
      setMessage('');
      console.log('Teams meeting link', link);
      
    };
    init();
  }, []);
  

// ****************************************************************************************************************

  
  const props = {
    userId: { communicationUserId: userId},
    token: token,
    displayName: 'Patrick (Field technician)',
    endpointUrl: 'https://acs-demo-001.africa.communication.azure.com/',
    locator: { meetingLink: teamsMeetingLink },
    fluentTheme: undefined,
    rtl: false,
    compositeOptions: undefined,
    callInvitationURL: undefined,
    formFactor: undefined//'desktop'
  };

  
  return (
    <div>
      <h1>Start a Call</h1>
      <p>{message}</p>
      {userId && token && teamsMeetingLink ? (
        <CallWithChatExperience {...props} />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  

// ********************************************************************************************************************

  
  const props = {
    userId: { communicationUserId: '8:acs:15e4a761-4d47-4aeb-9376-e1cf7b02c325_00000026-ad94-e5a0-5b42-ad3a0d001eb0' },
    token: 'eyJhbGciOiJSUzI1NiIsImtpZCI6IkY1M0ZEODA0RThBNDhBQzg4Qjg3NTA3M0M4MzRCRDdGNzBCMzBENDUiLCJ4NXQiOiI5VF9ZQk9pa2lzaUxoMUJ6eURTOWYzQ3pEVVUiLCJ0eXAiOiJKV1QifQ.eyJza3lwZWlkIjoiYWNzOjE1ZTRhNzYxLTRkNDctNGFlYi05Mzc2LWUxY2Y3YjAyYzMyNV8wMDAwMDAyNi1hZDk0LWU1YTAtNWI0Mi1hZDNhMGQwMDFlYjAiLCJzY3AiOjE3OTIsImNzaSI6IjE3NDM5ODY1NzMiLCJleHAiOjE3NDQwNzI5NzMsInJnbiI6InphIiwiYWNzU2NvcGUiOiJjaGF0LHZvaXAiLCJyZXNvdXJjZUlkIjoiMTVlNGE3NjEtNGQ0Ny00YWViLTkzNzYtZTFjZjdiMDJjMzI1IiwicmVzb3VyY2VMb2NhdGlvbiI6ImFmcmljYSIsImlhdCI6MTc0Mzk4NjU3M30.IYJn-8ytT8tp6dmV-uUwj8_eP0mhTxcWZtKtLxw0kRRSVBPwXN7P3LwfpV9a-sU4Q_Z1Coa1jJXPRE2b0YsXEnPKQSMgRn2pil1-Rgc4rnTssaveub7CBwQ_HHl9DBYwztyLcrMAQDVx5f7uZDuUm7Q85PIuziLL-CuZdszGgVQm1Hds7G08P9kPp03oZY4ATH41zNh2wU682sayRS8fhCCEIegIJAodCE8Sl19DRGBxCdfyB2j_n9BgGqYI0EkaCK89oXV4WTdMpjp1M_DpfTHwtWe-riyQonnrzOhy0iduTFRcPCUaafkBitT1fQYelPxSy8J4c6knqSUsXHRuzw',
    displayName: 'Patrick (Field Tech)',
    endpointUrl: 'https://acs-demo-001.africa.communication.azure.com/',
    locator: { meetingLink: 'https://teams.microsoft.com/l/meetup-join/19%3ameeting_MzViYjBhMTQtMDkxZS00NjUyLTgxYWQtNzZkYWVjNjZjZDQx%40thread.v2/0?context=%7b%22Tid%22%3a%222fd3c5d5-ddb2-4ed3-9803-f89675928df4%22%2c%22Oid%22%3a%22196f1e8d-758f-4e2c-8e51-599a781b9f67%22%7d' },
    fluentTheme: undefined,
    rtl: false,
    compositeOptions: undefined,
    callInvitationURL: undefined,
    formFactor: undefined//'desktop'
    
  };

  return <CallWithChatExperience {...props} />;



};



export default App;

*/

// pushed to git

