export default function BackgroundLights() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-[#050505]">
      
      {/* LUZ SUPERIOR: 
          Mobile: h-[20rem] w-[20rem] e blur-[80px] (Mais contida)
          Desktop (md:): Volta para os 35rem/40rem e blur-[120px] 
      */}
      <div className="absolute left-1/2 top-[-5%] md:top-[-20%] h-[20rem] w-[20rem] md:h-[35rem] md:w-[40rem] -translate-x-1/2 rounded-full bg-purple-500/5 blur-[80px] md:blur-[120px]" />

      {/* LUZ CENTRAL: 
          Mobile: hidden (Desligada para o preto reinar e não misturar com as outras)
          Desktop (md:): Volta a aparecer como um detalhe lateral 
      */}
      <div className="hidden md:block absolute right-[-5%] top-[40%] h-[25rem] w-[25rem] rounded-full bg-purple-600/5 blur-[120px]" />
      
      {/* LUZ INFERIOR: 
          Mobile: h-[15rem] w-[15rem] e blur-[80px] (Pequenininha no canto)
          Desktop (md:): Volta para os 30rem 
      */}
      <div className="absolute left-[-10%] bottom-[-5%] md:bottom-[-10%] h-[15rem] w-[15rem] md:h-[30rem] md:w-[30rem] rounded-full bg-purple-700/5 blur-[80px] md:blur-[120px]" />
      
    </div>
  );
}