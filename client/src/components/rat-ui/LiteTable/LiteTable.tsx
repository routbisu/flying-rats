import React from 'react';
import './LiteTable.scss';
import { Rat } from '../../../types/rat';

interface Props {
  ratDetails: Rat;
}

const LiteTable: React.FC<Props | null> = ({ ratDetails }) => {
  if (ratDetails) {
    const { width, height, nickname } = ratDetails;
    return (
      <div className="table-container">
        {ratDetails && (
          <table>
            <tbody>
              <tr>
                <th>Width</th>
                <td>{width} cm</td>
              </tr>
              <tr>
                <th>Height</th>
                <td>{height} cm</td>
              </tr>
              <tr>
                <th>Nickname</th>
                <td>{nickname || 'Uncool Rat with no Nickname'}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    );
  } else {
    return null;
  }
};

export default LiteTable;
