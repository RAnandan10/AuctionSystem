import styled from '@emotion/styled';
import xw from 'xwind/macro';

const StyledFooter = styled.footer(xw`
	py-4 
	text-center
`);

const StyledText = styled.span(xw`
	block 
	md:inline-block 
	mb-4 
	md:mb-0 
	mx-3
`);

const StyledLink = styled.a(xw`
	inline-block
	text-blue-900
	hover:text-indigo-600
`);

const Footer = () => {
  return (
    <StyledFooter>
      <StyledText>
        A scalable Auction system demo for Datacenter Scale Computing 2023.
      </StyledText>
    </StyledFooter>
  );
};

export default Footer;
