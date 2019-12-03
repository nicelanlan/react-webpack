import React from 'react';
import { Avatar, SVGIcon } from 'eds-react/lib/components';

const IconFolder = (
  <SVGIcon>
    <path d="M10 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2h-8l-2-2z" />
  </SVGIcon>
);

const imgSrc = 'https://avatars0.githubusercontent.com/u/7446962?s=460&v=4';

export default () => (
  <div className="story-demo-avatar">
    <Avatar size="sm" color="red" icon={IconFolder} />
    <Avatar color="red" icon={IconFolder} />
    <Avatar size="lg" color="red" icon={IconFolder} />
    <Avatar size="sm" src={imgSrc} imgProps={{ alt: 'avatar' }} />
    <Avatar src={imgSrc} imgProps={{ alt: 'avatar' }} />
    <Avatar size="lg" src={imgSrc} imgProps={{ alt: 'avatar' }} />
  </div>
);
