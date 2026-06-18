"use client";

import { useEffect, useRef, useState } from "react";

/* ── Data ── */
const skillGroups = [
  {
    title: "Frontend",
    icon: "🎨",
    items: ["HTML", "CSS/Tailwind", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend & Database",
    icon: "⚙️",
    items: ["Node.js", "REST API", "PostgreSQL", "Firebase", "SQL Server"],
  },
  {
    title: "Tools & Workflow",
    icon: "🛠️",
    items: ["Git/GitHub", "WordPress", "Deployment", "VS Code"],
  },
];

const projects = [
  {
    title: "Website quản lý hoạt động rèn luyện sinh viên",
    description:
      "Dự án đồ án chuyên ngành và nghiên cứu khoa học về quản lý hoạt động rèn luyện, tập trung vào quy trình, dữ liệu và trải nghiệm người dùng.",
    tags: ["Web App", "Nghiên cứu", "Quản lý"],
    href: "https://nckh.hoatdongrenluyen.io.vn/login",
    repo: "https://github.com/Jiipi/NCKH2026_QLVTGCHDRL_SinhVien.git",
    gradient: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Lumio - Ứng dụng học tiếng Anh với AI",
    description:
      "Nền tảng học tiếng Anh hỗ trợ AI cho người học Việt Nam, có đăng nhập Google/Facebook/email, đăng ký tài khoản và khôi phục mật khẩu.",
    tags: ["AI Learning", "English App", "Authentication", "Web App"],
    href: "https://lumio.nguyenhoangnamkhanh.id.vn/",
    repo: "https://github.com/NamKhanhCTK46B/lumio_app.git",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    title: "Website quán cafe",
    description:
      "Website được phát triển cho môn học ứng dụng mã nguồn mở, thể hiện khả năng làm giao diện, trình bày nội dung và tổ chức thông tin.",
    tags: ["WordPress", "UI", "Môn học"],
    href: "https://nificafe.rf.gd/",
    repo: "https://github.com/NamKhanhCTK46B/NifiCafe.git",
    gradient: "from-amber-500 to-orange-500",
  },
  {
    title: "Portfolio cá nhân",
    description:
      "Trang giới thiệu hồ sơ cá nhân, học vấn, kỹ năng và các dự án nổi bật, tối ưu cho ứng tuyển thực tập.",
    tags: ["Portfolio", "Next.js", "Vercel"],
    href: "https://portfolio.nguyenhoangnamkhanh.id.vn/",
    repo: "https://github.com/NamKhanhCTK46B/portfolio.git",
    gradient: "from-emerald-500 to-teal-500",
  },
];

const metrics = [
  { value: "3.4", label: "GPA", icon: "🎓" },
  { value: "985", label: "TOEIC", icon: "🌍" },
  { value: "4", label: "Dự án", icon: "🚀" },
];

const contactInfo = [
  { icon: "📧", label: "Email", value: "khanh51024@gmail.com", href: "mailto:khanh51024@gmail.com" },
  { icon: "📞", label: "Điện thoại", value: "0328405706", href: null },
  { icon: "📍", label: "Địa chỉ", value: "TP. Đà Lạt, Lâm Đồng", href: null },
  { icon: "🔗", label: "GitHub", value: "github.com/NamKhanhCTK46B", href: "https://github.com/NamKhanhCTK46B" },
];

const aboutCards = [
  { icon: "🏛️", label: "Đại học", value: "Trường Đại học Đà Lạt" },
  { icon: "💻", label: "Chuyên ngành", value: "Kỹ thuật phần mềm" },
  { icon: "📊", label: "GPA", value: "3.4/4.0" },
];

/* ── Particle System ── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    const particles: { x: number; y: number; vx: number; vy: number; size: number; alpha: number; color: string }[] = [];

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const colors = ["rgba(6,182,212,", "rgba(139,92,246,", "rgba(217,70,239,"];

    for (let i = 0; i < 60; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        size: Math.random() * 2 + 0.5,
        alpha: Math.random() * 0.5 + 0.1,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fillStyle = p.color + p.alpha + ")";
        ctx.fill();
      });

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(139,92,246,${0.06 * (1 - dist / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="particles-canvas" />;
}

/* ── Scroll Animation Hook ── */
function useScrollFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

/* ── Page Component ── */
export default function HomePage() {
  useScrollFadeUp();
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: "success" | "error" } | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) {
      showToast("Vui lòng điền đầy đủ thông tin", "error");
      return;
    }
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });
      if (res.ok) {
        showToast("Đã gửi email thành công! Cảm ơn bạn 🎉", "success");
        setFormState({ name: "", email: "", message: "" });
      } else {
        throw new Error();
      }
    } catch {
      showToast("Gửi thất bại. Vui lòng thử lại hoặc gửi trực tiếp qua email.", "error");
    } finally {
      setSending(false);
    }
  };

  return (
    <>
      {/* ── Animated Background ── */}
      <div className="bg-orbs">
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="orb orb-4" />
      </div>
      <ParticleCanvas />
      <div className="bg-grid" style={{ position: "fixed", inset: 0, zIndex: 1, pointerEvents: "none" }} />

      <main style={{ position: "relative", zIndex: 2 }}>
        {/* ════════════ HERO ════════════ */}
        <section style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center" }}>
          <div className="section-shell" style={{ paddingTop: "2rem", paddingBottom: "2rem" }}>
            {/* Nav */}
            <header
              className="glass-card"
              style={{ borderRadius: "1.5rem", padding: "1rem 1.5rem", display: "flex", alignItems: "center", justifyContent: "space-between" }}
            >
              <div>
                <p className="gradient-text" style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.25em", margin: 0 }}>
                  Portfolio
                </p>
                <p style={{ fontSize: "1.125rem", fontWeight: 600, color: "#e2e8f0", margin: "2px 0 0" }}>
                  Nguyễn Hoàng Nam Khánh
                </p>
              </div>
              <nav className="hidden gap-7 md:flex">
                <a href="#about" className="nav-link">Giới thiệu</a>
                <a href="#skills" className="nav-link">Kỹ năng</a>
                <a href="#projects" className="nav-link">Dự án</a>
                <a href="#contact" className="nav-link">Liên hệ</a>
              </nav>
            </header>

            {/* Hero grid */}
            <div className="grid items-center gap-12 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-20">
              <div className="flex flex-col gap-8">
                <span
                  className="inline-flex self-start items-center rounded-full"
                  style={{ border: "1px solid rgba(139,92,246,0.3)", background: "rgba(139,92,246,0.1)", padding: "0.5rem 1.25rem", fontSize: "0.875rem", fontWeight: 500, color: "#c4b5fd" }}
                >
                  ✦ Sinh viên Kỹ thuật phần mềm đang tìm nơi thực tập
                </span>

                <div className="flex flex-col gap-5">
                  <h1 style={{ fontSize: "clamp(2.25rem, 5vw, 4rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.025em", color: "#f1f5f9", margin: 0 }}>
                    Xây dựng trải nghiệm số{" "}
                    <span className="shimmer-text">hiện đại</span>,{" "}
                    dễ dùng và có thể triển khai thực tế.
                  </h1>
                  <p style={{ maxWidth: "38rem", fontSize: "1.125rem", lineHeight: 1.8, color: "#94a3b8", margin: 0 }}>
                    Tôi là Nguyễn Hoàng Nam Khánh, sinh viên Trường Đại học Đà Lạt chuyên ngành Kỹ thuật phần mềm.
                    Tôi tập trung phát triển ứng dụng web từ giao diện đến dữ liệu, luôn hướng đến sản phẩm thực tế và trải nghiệm người dùng.
                  </p>
                </div>

                <div className="flex flex-wrap gap-4">
                  <a href="#projects" className="btn-primary" style={{ textDecoration: "none" }}>Xem dự án →</a>
                  <a href="https://github.com/NamKhanhCTK46B" target="_blank" rel="noreferrer" className="btn-secondary">GitHub ↗</a>
                </div>
              </div>

              {/* Profile Card */}
              <div className="glass-card" style={{ borderRadius: "2rem", padding: "1.5rem" }}>
                <div style={{ borderRadius: "1.75rem", padding: "2px", background: "linear-gradient(135deg, var(--accent-cyan), var(--accent-violet), var(--accent-fuchsia))" }}>
                  <div style={{ borderRadius: "1.65rem", background: "rgba(3,7,18,0.92)", padding: "1.75rem" }}>
                    <div className="flex items-center gap-5">
                      <img
                        src="/images/anh_dai_dien.jpg"
                        alt="Nguyễn Hoàng Nam Khánh"
                        className="rounded-2xl object-cover"
                        style={{ width: "5.5rem", height: "5.5rem", border: "2px solid rgba(139,92,246,0.3)" }}
                      />
                      <div>
                        <p className="gradient-text" style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.2em", fontWeight: 600, margin: 0 }}>Profile</p>
                        <h2 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#f1f5f9", margin: "4px 0 0" }}>Nguyễn Hoàng Nam Khánh</h2>
                        <p style={{ color: "#94a3b8", fontSize: "0.9375rem", margin: "4px 0 0" }}>Sinh viên KTPM</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-3 gap-3 mt-7">
                      {metrics.map((m) => (
                        <div key={m.label} className="metric-card">
                          <div style={{ fontSize: "1.25rem", marginBottom: "0.25rem" }}>{m.icon}</div>
                          <div className="gradient-text" style={{ fontSize: "1.5rem", fontWeight: 800 }}>{m.value}</div>
                          <div style={{ fontSize: "0.6875rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "#64748b", marginTop: "0.25rem" }}>{m.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="glow-line" />
        </section>

        {/* ════════════ ABOUT ════════════ */}
        <section id="about" className="section-shell py-20 sm:py-24">
          <div className="fade-up grid gap-8 lg:grid-cols-[1fr_0.72fr]">
            <div className="glass-card" style={{ borderRadius: "2rem", padding: "2.5rem" }}>
              <p className="gradient-text" style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.28em", margin: 0 }}>Giới thiệu</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", color: "#f1f5f9", marginTop: "1rem" }}>
                Sẵn sàng cho kỳ thực tập đầu tiên của tôi.
              </h2>
              <p style={{ maxWidth: "48rem", fontSize: "1rem", lineHeight: 2, color: "#94a3b8", marginTop: "1.25rem" }}>
                Tôi quan tâm đến việc xây dựng giao diện sạch, có cấu trúc tốt, và học cách phối hợp giữa thiết kế, phát triển và yêu cầu nghiệp vụ.
                Các dự án trong CV của tôi tập trung vào ứng dụng web thực tế như quản lý hoạt động rèn luyện, website dịch vụ và portfolio cá nhân.
              </p>
              <div className="grid gap-4 mt-8 sm:grid-cols-3">
                {aboutCards.map((card) => (
                  <div key={card.label} className="metric-card" style={{ textAlign: "left" }}>
                    <div style={{ fontSize: "0.8125rem", color: "#64748b" }}>{card.icon} {card.label}</div>
                    <div style={{ fontSize: "1.0625rem", fontWeight: 600, color: "#e2e8f0", marginTop: "0.375rem" }}>{card.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              className="glass-card"
              style={{ borderRadius: "2rem", padding: "2.5rem", borderColor: "rgba(139,92,246,0.2)", background: "rgba(139,92,246,0.05)" }}
            >
              <p className="gradient-text" style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.28em", margin: 0 }}>Mục tiêu</p>
              <h3 style={{ fontSize: "1.375rem", fontWeight: 700, color: "#f1f5f9", marginTop: "1rem" }}>
                Tìm nơi thực tập phù hợp để học nhanh và đóng góp thật.
              </h3>
              <ul style={{ marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "1rem", color: "#94a3b8", listStyle: "none", padding: 0, margin: "1.5rem 0 0" }}>
                {[
                  { color: "var(--accent-cyan)", text: "Tập trung frontend với React/Next.js và hệ thống component rõ ràng." },
                  { color: "var(--accent-violet)", text: "Có thể làm việc với backend cơ bản, REST API và cơ sở dữ liệu như PostgreSQL/Firebase." },
                  { color: "var(--accent-fuchsia)", text: "Sẵn sàng học theo quy trình nhóm, Git workflow và triển khai lên Vercel." },
                ].map((item) => (
                  <li key={item.text} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                    <span style={{ color: item.color, fontSize: "1.125rem", flexShrink: 0 }}>▹</span>
                    {item.text}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ════════════ SKILLS ════════════ */}
        <section id="skills" className="py-20 sm:py-24">
          <div className="section-shell">
            <div className="fade-up" style={{ maxWidth: "40rem" }}>
              <p className="gradient-text" style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.28em", margin: 0 }}>Kỹ năng</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", color: "#f1f5f9", marginTop: "1rem" }}>
                Kỹ năng được sắp theo hướng ứng tuyển thực tập.
              </h2>
              <p style={{ fontSize: "1rem", lineHeight: 2, color: "#64748b", marginTop: "1rem" }}>
                Nội dung kỹ năng được điều chỉnh để phù hợp với sinh viên đang tìm môi trường thực tập, ưu tiên khả năng làm web, làm việc với dữ liệu và phối hợp với team.
              </p>
            </div>

            <div className="grid gap-6 mt-12 lg:grid-cols-3">
              {skillGroups.map((group) => (
                <article key={group.title} className="glass-card fade-up" style={{ borderRadius: "1.5rem", padding: "2rem" }}>
                  <div className="flex items-center gap-3">
                    <span style={{ fontSize: "1.5rem" }}>{group.icon}</span>
                    <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "#f1f5f9", margin: 0 }}>{group.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2.5 mt-6">
                    {group.items.map((item) => (
                      <span key={item} className="skill-badge">{item}</span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ════════════ PROJECTS ════════════ */}
        <section id="projects" className="py-20 sm:py-24">
          <div className="section-shell">
            <div className="fade-up" style={{ maxWidth: "40rem" }}>
              <p className="gradient-text" style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.28em", margin: 0 }}>Dự án</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", color: "#f1f5f9", marginTop: "1rem" }}>
                Bốn dự án tiêu biểu thể hiện khả năng học và triển khai.
              </h2>
            </div>

            <div className="grid gap-6 mt-12 sm:grid-cols-2">
              {projects.map((project) => (
                <article key={project.title} className="project-card fade-up">
                  <div
                    className={`bg-gradient-to-br ${project.gradient}`}
                    style={{
                      width: "3.5rem", height: "3.5rem", borderRadius: "1rem",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "1.25rem", fontWeight: 700, color: "#fff",
                      boxShadow: "0 8px 24px rgba(0,0,0,0.2)",
                    }}
                  >
                    {project.title.slice(0, 1)}
                  </div>
                  <h3 style={{ fontSize: "1.125rem", fontWeight: 700, color: "#f1f5f9", marginTop: "1.25rem" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.875rem", lineHeight: 1.8, color: "#94a3b8", marginTop: "0.75rem" }}>
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-5">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag-chip">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-6">
                    <a href={project.href} target="_blank" rel="noreferrer" className="btn-primary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.8125rem", textDecoration: "none" }}>
                      Demo ↗
                    </a>
                    <a href={project.repo} target="_blank" rel="noreferrer" className="btn-secondary" style={{ padding: "0.625rem 1.25rem", fontSize: "0.8125rem" }}>
                      GitHub
                    </a>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <div className="section-divider" />

        {/* ════════════ CONTACT ════════════ */}
        <section id="contact" className="py-20 sm:py-24">
          <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="fade-up">
              <p className="gradient-text" style={{ fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.28em", margin: 0 }}>Liên hệ</p>
              <h2 style={{ fontSize: "clamp(1.5rem, 3vw, 2.25rem)", fontWeight: 700, letterSpacing: "-0.015em", color: "#f1f5f9", marginTop: "1rem" }}>
                Sẵn sàng trao đổi cho cơ hội thực tập tiếp theo.
              </h2>
              <p style={{ maxWidth: "32rem", fontSize: "1rem", lineHeight: 2, color: "#94a3b8", marginTop: "1rem" }}>
                Nếu anh/chị đang tìm một thực tập sinh có tinh thần học hỏi, muốn làm việc với giao diện web, dữ liệu và quy trình nhóm, tôi rất sẵn sàng trao đổi.
              </p>
              <div className="flex flex-col gap-4 mt-8">
                {contactInfo.map((item) => (
                  <div key={item.label} className="flex items-center gap-3">
                    <span style={{ color: "#64748b", fontSize: "0.9375rem" }}>{item.icon} {item.label}:</span>
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.href.startsWith("http") ? "_blank" : undefined}
                        rel="noreferrer"
                        style={{ color: "#c4b5fd", fontWeight: 500, textDecoration: "none", transition: "color 300ms" }}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: "#e2e8f0", fontWeight: 500 }}>{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="glass-card fade-up" style={{ borderRadius: "2rem", padding: "2rem" }}>
              <h3 style={{ fontSize: "1.125rem", fontWeight: 600, color: "#e2e8f0", margin: "0 0 1.5rem" }}>Gửi tin nhắn cho tôi</h3>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div>
                  <label htmlFor="contact-name" style={{ fontSize: "0.8125rem", color: "#64748b", marginBottom: "0.375rem", display: "block" }}>Họ và tên</label>
                  <input
                    id="contact-name"
                    className="form-input"
                    placeholder="Nguyễn Văn A"
                    value={formState.name}
                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" style={{ fontSize: "0.8125rem", color: "#64748b", marginBottom: "0.375rem", display: "block" }}>Email</label>
                  <input
                    id="contact-email"
                    className="form-input"
                    placeholder="email@example.com"
                    type="email"
                    value={formState.email}
                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" style={{ fontSize: "0.8125rem", color: "#64748b", marginBottom: "0.375rem", display: "block" }}>Nội dung liên hệ</label>
                  <textarea
                    id="contact-message"
                    className="form-input"
                    placeholder="Nội dung tin nhắn..."
                    style={{ minHeight: "9rem", resize: "vertical" }}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                  />
                </div>
                <button type="submit" className="btn-primary" disabled={sending}>
                  {sending ? (
                    <>
                      <span style={{
                        display: "inline-block", width: "1rem", height: "1rem",
                        border: "2px solid rgba(255,255,255,0.3)", borderTopColor: "#fff",
                        borderRadius: "50%", animation: "spin 0.6s linear infinite",
                      }} />
                      Đang gửi...
                    </>
                  ) : (
                    "Gửi tin nhắn ✉️"
                  )}
                </button>
              </form>
            </div>
          </div>
        </section>

        {/* ── Footer ── */}
        <footer style={{ borderTop: "1px solid rgba(148,163,184,0.08)", padding: "2rem 0", textAlign: "center" }}>
          <p style={{ fontSize: "0.8125rem", color: "#475569", margin: 0 }}>
            © 2026 Nguyễn Hoàng Nam Khánh — Built with Next.js & ❤️
          </p>
        </footer>
      </main>

      {/* Toast Notification */}
      {toast && (
        <div className={`toast ${toast.type === "success" ? "toast-success" : "toast-error"}`}>
          {toast.message}
        </div>
      )}

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
      `}</style>
    </>
  );
}
