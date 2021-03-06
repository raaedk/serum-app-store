import React, { FC } from "react";

import { Pane, Heading, Text, Image } from 'evergreen-ui';

import { primaryTextColor } from '../Shared/Color';

import SerumLogo from '../../assets/images/serum-logo.png'

export interface AppCardProps {
    title: string,
    desc: string,
    launchURL: URL,
    image?: string,
}

/*
Component AppCard

This component will display an application

title: The title of the card
desc: The text to display, describing the application.
launchURL: the url to launch when a user selects the application
image: The image to display. We will default to the SerumLogo if it isn't present
*/

const AppCard: FC<AppCardProps> = ({title, desc, launchURL, image}) => {
    return <Pane
    hoverElevation={2}
    float="left"
    width='auto'
    height='auto'
    margin={18}
    display="flex"
    justifyContent="center"
    alignItems="center"
    flexDirection="column"
    background='#161b19'
    onClick={() => window.location.href=launchURL.href}
    cursor="pointer"
  >
    <Pane display='flex' padding='8px' justifyContent='center' alignContent='center'><Heading color='#33a382'>{title}</Heading></Pane>
    
    <Image margin='8px' width='80%' src={image ? image : SerumLogo}/>
    <Text margin='8px' color={primaryTextColor} size={300}>{desc}</Text>
  </Pane>
}

export { AppCard };