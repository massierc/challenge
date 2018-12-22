import React from 'react';
import styled, { withTheme } from 'styled-components';
import ReactSelect from 'react-select';

const StyledSelect = props => {
  return (
    <ReactSelect
      {...props}
      isSearchable
      isClearable
      theme={theme => ({
        ...theme,
        borderRadius: 2,
        fontSize: props.theme.font.size.p1,
        colors: {
          ...theme.colors,
          primary: props.theme.colors.primary,
          primary75: props.theme.colors.primary75,
          primary50: props.theme.colors.primary50,
          primary25: props.theme.colors.primary25
        }
      })}
      styles={{
        control: (provided, state) => ({
          ...provided,
          border: `1px solid ${props.theme.colors.grey}`
        }),
        indicatorSeparator: () => ({})
      }}
    />
  );
};

const Select = styled(StyledSelect)`
  font-size: ${props => props.theme.font.size.p1};
`;

export default withTheme(Select);
