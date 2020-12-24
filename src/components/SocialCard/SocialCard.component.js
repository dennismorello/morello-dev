import LinkButton from "../LinkButton/LinkButton.component";

const SocialCard = ({ href, colorScheme, children, ...otherProps }) => (
  <LinkButton
    href={href}
    colorScheme={colorScheme}
    rel="noopener"
    target="_blank"
    h={[24, null, 32]}
    rounded="2xl"
    {...otherProps}
  >
    {children}
  </LinkButton>
);

export default SocialCard;
