import { ScanLoader } from "@/components/visual/scan-loader";

export default function AnalyzeLoading() {
  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-12 sm:px-6 lg:px-8">
      <ScanLoader />
    </section>
  );
}
