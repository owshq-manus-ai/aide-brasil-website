import { HeroLamp } from "@/components/ui/hero-lamp"

function TestHeroLamp() {
  return (
    <div className="min-h-screen bg-black">
      <HeroLamp
        title="AI Data Engineer Brasil"
        subtitle="A primeira comunidade brasileira dedicada à convergência entre Engenharia de Dados e Inteligência Artificial Generativa (GenAI)."
        actions={[
          {
            label: "Sobre a Comunidade",
            href: "#sobre",
            variant: "outline"
          },
          {
            label: "Junte-se a Nós",
            href: "#contato",
            variant: "default"
          }
        ]}
        titleClassName="text-5xl md:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300"
        subtitleClassName="text-lg md:text-xl max-w-[800px] text-gray-400"
        actionsClassName="mt-8"
        gradient={true}
        blur={true}
      />
    </div>
  );
}

export default TestHeroLamp;