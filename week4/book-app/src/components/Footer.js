import React from "react";
import styled from "styled-components";
import FacebookIcon from "@mui/icons-material/Facebook";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";

function Footer() {
	return (
		<div>
			<StyledWrapper>
				<StyledLinkContainer>
					<StyledTitle> COMPANY </StyledTitle>
					<StyledLink href="" className="link">
						About us
					</StyledLink>
					<StyledLink href="" className="link">
						Careers
					</StyledLink>
					<StyledLink href="" className="link">
						Terms
					</StyledLink>
					<StyledLink href="" className="link">
						Privacy
					</StyledLink>
					<StyledLink href="" className="link">
						Interest Based Ads
					</StyledLink>
					<StyledLink href="" className="link">
						Ad Preferences
					</StyledLink>
					<StyledLink href="" className="link">
						Help
					</StyledLink>
				</StyledLinkContainer>
				<StyledLinkContainer>
					<StyledTitle> WORK WITH US </StyledTitle>
					<StyledLink href="" className="link">
						Authors
					</StyledLink>
					<StyledLink href="" className="link">
						Advertise
					</StyledLink>
					<StyledLink href="" className="link">
						Authors & ads blog
					</StyledLink>
					<StyledLink href="" className="link">
						API
					</StyledLink>
				</StyledLinkContainer>
				<StyledLinkContainer>
					<StyledTitle> CONNECT </StyledTitle>
					<StyledIconContainer>
						<FacebookIcon />
						<YouTubeIcon />
						<TwitterIcon />
					</StyledIconContainer>
				</StyledLinkContainer>
				<StyledCompanyLink>
					<img
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Google_Play_Store_badge_EN.svg/160px-Google_Play_Store_badge_EN.svg.png"
						alt="google play"></img>
					<img
						src="https://d1a3f4spazzrp4.cloudfront.net/uber-com/1.3.8/d1a3f4spazzrp4.cloudfront.net/illustrations/app-store-apple-f1f919205b.svg"
						alt="app store"></img>
				</StyledCompanyLink>
			</StyledWrapper>
		</div>
	);
}

export default Footer;

export const StyledLinkContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const StyledWrapper = styled.div`
	display: flex;
	flex-direction: row;
	gap: 5rem;
	padding: 1rem 6rem;
	background-color: #f9f8f4;
	flex-wrap: wrap;
`;
export const StyledLink = styled.a`
	text-decoration: none;
	color: #382b86;
	&:hover {
		text-decoration: underline;
	}
`;
export const StyledTitle = styled.h3`
	color: #767676;
	font-weight: 500;
`;
export const StyledCompanyLink = styled.div`
	margin-left: auto;
	width: 10rem;
`;
export const StyledIconContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 0.3rem;
`;
