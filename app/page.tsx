import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { SectionTitle } from "@/components/ui/SectionTitle";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg">
      <section className="section-shell">
        <div className="container">
          <div className="mx-auto max-w-4xl space-y-8 text-center">
            <p className="font-mono text-sm uppercase tracking-[0.24em] text-muted">
              MotoFix Serwis
            </p>
            <SectionTitle
              title="System wizualny gotowy"
              subtitle="Nastepne commity dodadza komplet sekcji landing page i funkcjonalnosci formularza."
              align="center"
            />
            <Card className="mx-auto max-w-2xl">
              <div className="space-y-6">
                <p className="text-body text-muted">
                  Zbudowano podstawy stylu: kolory, typografie, cienie bez
                  blur oraz wspolne komponenty UI.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <Button>Umow wizyte</Button>
                  <Button variant="secondary">Zobacz uslugi</Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </main>
  );
}
