import React from 'react';
import { FaDownload, FaBan } from 'react-icons/fa';

import { DivResponsive } from './base/div';
import { ButtonPrimary, ButtonSecondary } from './base/button';
import { Span } from './base/span';

const styles = {
  button: { padding: '0 15px' },
  div: { justifyContent: 'space-between' },
  icon: { paddingLeft: '5px' },
};

interface Props {
  downloadDisabled: boolean;
  handleDownload: () => void;
  handleClearList: () => void;
}

export const Actions = React.memo(({ downloadDisabled, handleDownload, handleClearList }: Props) => (
  <DivResponsive style={styles.div}>
    <ButtonPrimary onClick={handleDownload} style={styles.button} disabled={downloadDisabled}>
      <Span>
        Download .mp3 <FaDownload style={styles.icon} />
      </Span>
    </ButtonPrimary>
    <ButtonSecondary onClick={handleClearList} style={styles.button}>
      <Span>
        Clear list <FaBan style={styles.icon} />
      </Span>
    </ButtonSecondary>
  </DivResponsive>
));
