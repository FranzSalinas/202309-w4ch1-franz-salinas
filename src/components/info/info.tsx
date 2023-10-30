type Props = {
  title: string;
  subtitle: string;
};

export function Info({ title, subtitle }: Props) {
  return (
    <>
      <header className="main-header">
        <h1 className="main-title">{title}</h1>
      </header>
      <section className="controls">
        u<p className="info">{subtitle}</p>
        <button className="button button--select">Select all</button>
      </section>
    </>
  );
}
