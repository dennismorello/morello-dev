import LinkButton from "../link-button/link-button.component";

const SocialCard = ({ href, colorScheme, children, ...otherProps }) => (
  <LinkButton
    href={href}
    colorScheme={colorScheme}
    rel="noopener"
    target="_blank"
    h={32}
    rounded="2xl"
    {...otherProps}
  >
    {children}
  </LinkButton>
);

export default SocialCard;
