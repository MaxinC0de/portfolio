import Image from "next/image";

import { SectionHeader } from "@/components/shared/section-header";
import { SectionShell } from "@/components/shared/section-shell";
import { Card } from "@/components/ui/card";
import { galleryImages } from "@/lib/demo-data";

export function DemoGallerySection() {
  return (
    <SectionShell id="galerie">
      <SectionHeader title="Galerie" />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {galleryImages.map((image) => (
          <Card
            key={image.src}
            className="group overflow-hidden p-0 ring-0 transition-transform hover:scale-[1.02]"
          >
            <div className="relative aspect-square overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </Card>
        ))}
      </div>
    </SectionShell>
  );
}
