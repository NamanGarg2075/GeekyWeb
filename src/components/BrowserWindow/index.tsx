import React, {type ReactNode} from 'react';

import './styles.index.css';

interface Props {
  children: ReactNode;
  minHeight: number;
  url: string;
}

function BrowserWindow({
  children,
  minHeight,
  url = 'GeekyWeb',
}: Props): JSX.Element {
  return (
    <div className="browserWindow" style={{minHeight}}>
      <div className="browserWindowHeader">
        <div className="buttons">
          <span className="dot" style={{background: '#f25f58'}} />
          <span className="dot" style={{background: '#fbbe3c'}} />
          <span className="dot" style={{background: '#58cb42'}} />
        </div>
        <div className="browserWindowAddressBar">{url}</div>
        <div className="browserWindowMenuIcon">
          <div>
            <span className="bar" />
            <span className="bar" />
            <span className="bar" />
          </div>
        </div>
      </div>

      <div className="browserWindowBody">{children}</div>
    </div>
  );
}

export default BrowserWindow;