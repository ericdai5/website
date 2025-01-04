import NavItems from './NavItems';

export default function Navigation() {
  return (
    <nav className="mb-12 flex w-full flex-row border-b border-b-[var(--border)] bg-background py-5">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-row items-center justify-between">
        <div className="flex w-full flex-row items-center justify-between gap-16">
          <h5>Selected Works</h5>
          <NavItems />
        </div>
      </div>
    </nav>
  );
}
