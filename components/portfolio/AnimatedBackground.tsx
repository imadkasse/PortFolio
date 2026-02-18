export function AnimatedBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-br from-indigo-500/20 via-purple-500/10 to-transparent blur-3xl animate-pulse" />
      <div 
        className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-tl from-cyan-500/20 via-blue-500/10 to-transparent blur-3xl animate-pulse" 
        style={{ animationDelay: '1s' }} 
      />
    </div>
  );
}
