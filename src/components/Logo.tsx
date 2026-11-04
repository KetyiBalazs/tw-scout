type LogoProps = {
  tone?: "dark" | "light";
};

export function Logo({ tone = "dark" }: LogoProps) {
  return (
    <a className={`logo logo-${tone}`} href="#top" aria-label="Scout">
      <img className="logo-mark" src="/assets/diamond-orange.png" alt="" />
      <img
        className="logo-word"
        src={tone === "light" ? "/assets/wordmark-light.svg" : "/assets/wordmark-dark.svg"}
        alt=""
      />
    </a>
  );
}
