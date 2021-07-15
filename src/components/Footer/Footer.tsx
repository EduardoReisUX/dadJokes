import "./footer.scss";

type FooterProps = {
  size?: string;
  children?: JSX.Element | string;
};

export function Footer(props: FooterProps) {
  return <div className="footer">{props.children}</div>;
}
