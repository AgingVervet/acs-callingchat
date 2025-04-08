
import { TeamsMeetingIdLocator, TeamsMeetingLinkLocator } from '@azure/communication-calling';
import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from '@azure/communication-common';
import {
  CallAndChatLocator,
  CallWithChatComposite,
  useAzureCommunicationCallWithChatAdapter,
  CallWithChatCompositeOptions
} from '@azure/communication-react';
import { Theme, PartialTheme, Spinner, initializeIcons } from '@fluentui/react';
import React, { useMemo } from 'react';

initializeIcons();

export type CallWithChatExampleProps = {
  userId: CommunicationUserIdentifier;
  token: string;
  displayName: string;
  endpointUrl: string;
  locator: TeamsMeetingLinkLocator | CallAndChatLocator | TeamsMeetingIdLocator;
  fluentTheme?: PartialTheme | Theme;
  rtl?: boolean;
  compositeOptions?: CallWithChatCompositeOptions;
  callInvitationURL?: string;
  formFactor?: 'desktop' | 'mobile';
};

export const CallWithChatExperience = (props: CallWithChatExampleProps): React.JSX.Element => {
  const credential = useMemo(() => new AzureCommunicationTokenCredential(props.token), [props.token]);
  const adapter = useAzureCommunicationCallWithChatAdapter({
    userId: props.userId,
    displayName: props.displayName,
    credential,
    locator: props.locator,
    endpoint: props.endpointUrl
  });

  if (!adapter) {
    return <Spinner label="Initializing..." />;
  }

  return (
    <CallWithChatComposite
      adapter={adapter}
      fluentTheme={props.fluentTheme}
      rtl={props.rtl}
      formFactor={props.formFactor}
      joinInvitationURL={props.callInvitationURL}
      //options={props.compositeOptions}
      
      options={{
        branding: {
          logo: {
            url: '/images/csir-logo.png',
            alt: 'My company logo',
            shape: 'circle'
          },
          backgroundImage: {
            url: '/images/custom-background.png'
          }
        }
      }}
      
    />
  );
};


// *******************************************************************************************************************

/*

import React from 'react';
import { TeamsMeetingIdLocator, TeamsMeetingLinkLocator } from '@azure/communication-calling';
import { AzureCommunicationTokenCredential, CommunicationUserIdentifier } from '@azure/communication-common';
import {
  CallAndChatLocator,
  CallWithChatComposite,
  useAzureCommunicationCallWithChatAdapter,
  CallWithChatCompositeOptions
} from '@azure/communication-react';
import { Theme, PartialTheme, Spinner, initializeIcons } from '@fluentui/react';

initializeIcons();

export type CallWithChatExampleProps = {
  userId: CommunicationUserIdentifier;
  token: string;
  displayName: string;
  endpointUrl: string;
  locator: TeamsMeetingLinkLocator | CallAndChatLocator | TeamsMeetingIdLocator;
  fluentTheme?: PartialTheme | Theme;
  rtl?: boolean;
  compositeOptions?: CallWithChatCompositeOptions;
  callInvitationURL?: string;
  formFactor?: 'desktop' | 'mobile';
};

export const CallWithChatExperience = (props: CallWithChatExampleProps): React.JSX.Element => {
  const credential = React.useMemo(() => new AzureCommunicationTokenCredential(props.token), [props.token]);
  const adapter = useAzureCommunicationCallWithChatAdapter({
    userId: props.userId,
    displayName: props.displayName,
    credential,
    locator: props.locator,
    endpoint: props.endpointUrl
  });

  if (!adapter) {
    return <Spinner label="Initializing..." />;
  }

  return (
    <CallWithChatComposite
      adapter={adapter}
      fluentTheme={props.fluentTheme}
      rtl={props.rtl}
      formFactor={props.formFactor}
      joinInvitationURL={props.callInvitationURL}
      options={props.compositeOptions}
    />
  );
};

*/