export function SectionTitle({ children }: { children: string }) {
  return (
    <h2 className="whitespace-pre-line text-3xl font-semibold leading-tight text-[#071B33] sm:text-4xl">
      {children}
    </h2>
  );
}
