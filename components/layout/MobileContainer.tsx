export default function MobileContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen w-full max-w-[480px] mx-auto bg-white dark:bg-background-dark shadow-xl overflow-x-hidden">
      {children}
    </div>
  );
}
