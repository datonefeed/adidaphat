"use client";

import { useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectById, projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import FloatingNav from "@/components/FloatingNav";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function ProjectPage() {
  const params = useParams();
  const id = params.id as string;
  const project = getProjectById(id || "");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!project) {
    return (
      <>
        <main className="min-h-screen bg-background">
          <Navbar />
          <div className="pt-40 pb-24 px-6 text-center">
            <h1 className="text-headline mb-4">Không tìm thấy dự án</h1>
            <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Quay về trang chủ
            </Link>
          </div>
        </main>
        <FloatingNav />
      </>
    );
  }

  // Find next and previous projects
  const currentIndex = projects.findIndex((p) => p.id === project.id);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject =
    currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  return (
    <>
      <main className="min-h-screen bg-background page-transition">
        <Navbar />

        {/* Hero Image */}
        <section className="pt-20 px-4 md:px-6">
          <div className="w-full h-[40vh] md:h-[80vh] overflow-hidden rounded-2xl md:rounded-3xl fade-in-up relative">
            <Image
              src={project.images[0]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>

        {/* Project Info */}
        <section className="py-8 px-6">
          <div className="max-w-4xl">
            <div className="mb-6 fade-in-up fade-in-up-delay-1">
              <h1 className="text-display mb-3">{project.title}</h1>
              <p className="text-sm text-muted-foreground">
                {project.tags.map((tag) => `#${tag}`).join(" ")}
              </p>
            </div>

            <div className="grid grid-cols-3 gap-6 mb-8 fade-in-up fade-in-up-delay-2">
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Năm
                </p>
                <p className="text-sm">{project.year}</p>
              </div>
              {project.client && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    Khách Hàng
                  </p>
                  <p className="text-sm">{project.client}</p>
                </div>
              )}
              <div>
                <p className="text-xs uppercase tracking-widest text-muted-foreground mb-1">
                  Thể Loại
                </p>
                <p className="text-sm capitalize">
                  {project.tags[0]}
                </p>
              </div>
            </div>

            <div className="max-w-2xl fade-in-up fade-in-up-delay-3">
              <p className="text-lg leading-relaxed text-foreground/90">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-6 px-6">
          <div className="max-w-6xl mx-auto space-y-6">
            {project.images.slice(1).map((image, idx) => (
              <div
                key={idx}
                className="relative w-full overflow-hidden rounded-2xl md:rounded-3xl fade-in-up"
                style={{
                  transitionDelay: `${(idx + 4) * 100}ms`,
                  minHeight: project.aspectRatio === 'portrait' ? '700px' : '500px'
                }}
              >
                <Image
                  src={image}
                  alt={`${project.title} - Image ${idx + 2}`}
                  width={1200}
                  height={project.aspectRatio === 'portrait' ? 1600 : 800}
                  className="w-full h-auto object-cover"
                />
              </div>
            ))}
          </div>
        </section>

        {/* Navigation */}
        <section className="py-16 px-6 border-t border-border mt-12">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 gap-4 md:gap-8">
              {/* Previous Project */}
              <div>
                {prevProject ? (
                  <Link
                    href={`/project/${prevProject.id}`}
                    className="group block"
                  >
                    <div className="flex items-center gap-2 mb-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-widest">
                        Trước
                      </span>
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-muted">
                      <Image
                        src={prevProject.images[0]}
                        alt={prevProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                      {prevProject.title}
                    </h3>
                  </Link>
                ) : (
                  <div className="opacity-30">
                    <div className="flex items-center gap-2 mb-3">
                      <ArrowLeft className="w-4 h-4" />
                      <span className="text-xs uppercase tracking-widest">
                        Trước
                      </span>
                    </div>
                    <div className="aspect-[4/3] rounded-xl bg-muted mb-3" />
                    <p className="text-sm">Không có dự án</p>
                  </div>
                )}
              </div>

              {/* Next Project */}
              <div className="text-right">
                {nextProject ? (
                  <Link
                    href={`/project/${nextProject.id}`}
                    className="group block"
                  >
                    <div className="flex items-center justify-end gap-2 mb-3 text-muted-foreground group-hover:text-foreground transition-colors">
                      <span className="text-xs uppercase tracking-widest">
                        Tiếp
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3 bg-muted">
                      <Image
                        src={nextProject.images[0]}
                        alt={nextProject.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-sm font-medium group-hover:opacity-70 transition-opacity">
                      {nextProject.title}
                    </h3>
                  </Link>
                ) : (
                  <div className="opacity-30">
                    <div className="flex items-center justify-end gap-2 mb-3">
                      <span className="text-xs uppercase tracking-widest">
                        Tiếp
                      </span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                    <div className="aspect-[4/3] rounded-xl bg-muted mb-3" />
                    <p className="text-sm">Không có dự án</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
      <FloatingNav />
    </>
  );
}
