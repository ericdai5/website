import NavItems from './NavItems';
// import LiveTime from './LiveTime';

export default function Navigation() {
  return (
    <nav className="mb-6 flex w-full flex-row border-b border-b-[var(--border)] bg-background py-5">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-row items-center justify-between">
        <div className="flex w-full flex-row items-center justify-between gap-16">
          <h4>Selected Works</h4>
          <NavItems />
        </div>
      </div>
    </nav>
  );
}
