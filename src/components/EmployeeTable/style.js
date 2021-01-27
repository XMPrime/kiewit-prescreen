import styled from 'styled-components';
import { COLORS } from '../../STYLE_CONSTS';

export const Table = styled.table`
  width: 50%;
  border-collapse: collapse;
  text-align: center;

  td,
  th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }

  tr:nth-child(even) {
    background-color: ${COLORS.kiewitYellow}80;
  }
`;
