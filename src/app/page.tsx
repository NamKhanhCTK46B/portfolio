const skillGroups = [
  {
    title: "Frontend",
    items: ["HTML", "CSS/Tailwind", "JavaScript", "React", "Next.js"],
  },
  {
    title: "Backend & Database",
    items: ["Node.js", "REST API", "PostgreSQL", "Firebase", "SQL Server"],
  },
  {
    title: "Tools & Workflow",
    items: ["Git/GitHub", "WordPress", "Deployment", "Figma", "VS Code"],
  },
];

const projects = [
  {
    title: "Lumio - Ứng dụng học tiếng Anh với AI",
    description:
      "Nền tảng học tiếng Anh hỗ trợ AI cho người học Việt Nam, có đăng nhập Google/Facebook/email, đăng ký tài khoản và khôi phục mật khẩu.",
    tags: ["AI Learning", "English App", "Authentication", "Web App"],
    href: "https://lumio.nguyenhoangnamkhanh.id.vn/",
    repo: "https://github.com/NamKhanhCTK46B/lumio_app.git",
  },
  {
    title: "Website quản lý hoạt động rèn luyện sinh viên",
    description:
      "Dự án đồ án chuyên ngành và nghiên cứu khoa học về quản lý hoạt động rèn luyện, tập trung vào quy trình, dữ liệu và trải nghiệm người dùng.",
    tags: ["Web App", "Nghiên cứu", "Quản lý"],
    href: "https://nckh.hoatdongrenluyen.io.vn/login",
    repo: "https://github.com/Jiipi/NCKH2026_QLVTGCHDRL_SinhVien.git",
  },
  {
    title: "Website quán cafe",
    description:
      "Website được phát triển cho môn học ứng dụng mã nguồn mở, thể hiện khả năng làm giao diện, trình bày nội dung và tổ chức thông tin.",
    tags: ["WordPress", "UI", "Môn học"],
    href: "https://nificafe.rf.gd/",
    repo: "https://github.com/NamKhanhCTK46B/NifiCafe.git",
  },
  {
    title: "Portfolio cá nhân",
    description:
      "Trang giới thiệu hồ sơ cá nhân, học vấn, kỹ năng và các dự án nổi bật, tối ưu cho ứng tuyển thực tập.",
    tags: ["Portfolio", "Next.js", "Vercel"],
    href: "https://portfolio.nguyenhoangnamkhanh.id.vn/",
    repo: "https://github.com/NamKhanhCTK46B/portfolio.git",
  },
];

const metrics = [
  { value: "3.37", label: "GPA" },
  { value: "985", label: "TOEIC" },
  { value: "4", label: "Dự án" },
];

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="relative overflow-hidden border-b border-white/10 bg-slate-950">
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(59,130,246,0.28),transparent_45%)]" />
        <div className="section-shell relative z-10 py-8 sm:py-10 lg:py-12">
          <header className="glass-card flex items-center justify-between rounded-3xl px-5 py-4 text-slate-900">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Portfolio</p>
              <p className="text-lg font-semibold">Nguyễn Hoàng Nam Khánh</p>
            </div>
            <nav className="hidden gap-6 text-sm font-medium text-slate-600 md:flex">
              <a href="#about" className="transition hover:text-slate-950">Giới thiệu</a>
              <a href="#skills" className="transition hover:text-slate-950">Kỹ năng</a>
              <a href="#projects" className="transition hover:text-slate-950">Dự án</a>
              <a href="#contact" className="transition hover:text-slate-950">Liên hệ</a>
            </nav>
          </header>

          <div className="grid items-center gap-14 py-16 lg:grid-cols-[1.15fr_0.85fr] lg:py-24">
            <div className="space-y-8">
              <span className="inline-flex items-center rounded-full border border-blue-400/30 bg-blue-400/10 px-4 py-2 text-sm font-medium text-blue-200">
                Sinh viên Công nghệ phần mềm đang tìm nơi thực tập
              </span>
              <div className="space-y-5">
                <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-7xl">
                  Xây dựng trải nghiệm số hiện đại, dễ dùng và có thể triển khai thực tế.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-300 sm:text-xl">
                  Tôi là Nguyễn Hoàng Nam Khánh, sinh viên Đại học Đà Lạt chuyên ngành Công nghệ phần mềm.
                  Tôi tập trung phát triển ứng dụng web từ giao diện đến dữ liệu, trong đó có Lumio - nền tảng học tiếng Anh hỗ trợ AI.
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <a href="#projects" className="inline-flex items-center justify-center rounded-2xl bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/30 transition hover:bg-blue-400">
                  Xem dự án
                </a>
                <a href="https://github.com/NamKhanhCTK46B" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-2xl border border-white/20 bg-white/5 px-6 py-3 font-semibold text-white shadow-lg shadow-white/5 backdrop-blur transition hover:-translate-y-0.5 hover:bg-white/10 hover:shadow-white/10">
                  GitHub
                </a>
              </div>
            </div>

            <div className="glass-card rounded-[2rem] p-5 text-slate-900">
              <div className="overflow-hidden rounded-[1.75rem] bg-gradient-to-br from-blue-600 via-violet-600 to-fuchsia-600 p-1 shadow-2xl shadow-blue-950/30">
                <div className="rounded-[1.65rem] bg-slate-950/95 p-6 text-white">
                  <div className="flex items-center gap-4">
                    <img src="/images/anh_dai_dien.jpg" alt="Nguyễn Hoàng Nam Khánh" className="h-24 w-24 rounded-3xl object-cover ring-2 ring-white/20" />
                    <div>
                      <p className="text-sm uppercase tracking-[0.2em] text-blue-300">Profile</p>
                      <h2 className="mt-1 text-2xl font-semibold">Nguyễn Hoàng Nam Khánh</h2>
                      <p className="mt-1 text-slate-300">Sinh viên CNTT</p>
                    </div>
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {metrics.map((metric) => (
                      <div key={metric.label} className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-[0_16px_40px_rgba(15,23,42,0.18)] transition hover:-translate-y-1 hover:border-blue-300/40 hover:bg-white/10">
                        <div className="text-2xl font-semibold text-white">{metric.value}</div>
                        <div className="mt-1 text-xs uppercase tracking-[0.18em] text-slate-400">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="section-shell py-20 sm:py-24">
        <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr]">
          <div className="rounded-[2rem] border border-slate-200/80 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Giới thiệu</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Sẵn sàng cho kỳ thực tập đầu tiên của tôi.</h2>
            <p className="mt-5 max-w-3xl text-base leading-8 text-slate-600 sm:text-lg">
              Tôi quan tâm đến việc xây dựng giao diện sạch, có cấu trúc tốt, và học cách phối hợp giữa thiết kế, phát triển và yêu cầu nghiệp vụ.
              Các dự án trong CV của tôi tập trung vào ứng dụng web thực tế như quản lý hoạt động rèn luyện, website dịch vụ, portfolio cá nhân và Lumio - ứng dụng học tiếng Anh với AI.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {[
                ["Đại học", "Đà Lạt"],
                ["Chuyên ngành", "Công nghệ phần mềm"],
                ["GPA", "3.37/4.0"],
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl bg-slate-50 p-4">
                  <div className="text-sm text-slate-500">{label}</div>
                  <div className="mt-1 text-lg font-semibold text-slate-900">{value}</div>
                </div>
              ))}
            </div>
          </div>

          <aside className="rounded-[2rem] border border-slate-200/80 bg-slate-900 p-8 text-white shadow-[0_24px_80px_rgba(15,23,42,0.12)] sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">Mục tiêu</p>
            <h3 className="mt-4 text-2xl font-semibold">Tìm nơi thực tập phù hợp để học nhanh và đóng góp thật.</h3>
            <ul className="mt-6 space-y-4 text-slate-300">
              <li>• Tập trung frontend với React/Next.js và hệ thống component rõ ràng.</li>
              <li>• Có thể làm việc với backend cơ bản, REST API và cơ sở dữ liệu như PostgreSQL/Firebase.</li>
              <li>• Sẵn sàng học theo quy trình nhóm, Git workflow và triển khai lên Vercel.</li>
            </ul>
          </aside>
        </div>
      </section>

      <section id="skills" className="bg-slate-50 py-20 sm:py-24 text-slate-950">
        <div className="section-shell">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Kỹ năng</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Kỹ năng được sắp theo hướng ứng tuyển thực tập.</h2>
            <p className="mt-4 text-base leading-8 text-slate-600">
              Nội dung kỹ năng được điều chỉnh để phù hợp với sinh viên đang tìm môi trường thực tập, ưu tiên khả năng làm web, làm việc với dữ liệu và phối hợp với team.
            </p>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <article key={group.title} className="rounded-[1.75rem] border border-slate-200 bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                <h3 className="text-xl font-semibold text-slate-950">{group.title}</h3>
                <div className="mt-5 flex flex-wrap gap-3">
                  {group.items.map((item) => (
                    <span key={item} className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="projects" className="section-shell py-20 sm:py-24">
        <div className="flex max-w-2xl flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">Dự án</p>
          <h2 className="text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">Bốn dự án tiêu biểu thể hiện khả năng học và triển khai.</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => (
            <article key={project.title} className="group relative overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-[0_34px_110px_rgba(37,99,235,0.16)]">
              <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/60 to-transparent opacity-0 transition group-hover:opacity-100" />
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-600 text-xl font-semibold text-white shadow-lg shadow-blue-500/25 transition duration-300 group-hover:scale-105 group-hover:shadow-violet-500/30">
                {project.title.slice(0, 1)}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950 transition group-hover:text-blue-700">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-700 transition group-hover:border-blue-100 group-hover:bg-blue-50 group-hover:text-blue-700">
                    {tag}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                <a href={project.href} target="_blank" rel="noreferrer" className="rounded-2xl bg-slate-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-slate-950/10 transition hover:-translate-y-0.5 hover:bg-blue-600 hover:shadow-blue-500/20">
                  Demo
                </a>
                <a href={project.repo} target="_blank" rel="noreferrer" className="rounded-2xl border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700">
                  GitHub
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-slate-950 py-20 text-white sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-300">Liên hệ</p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Sẵn sàng trao đổi cho cơ hội thực tập tiếp theo.</h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-300">
              Nếu anh/chị đang tìm một thực tập sinh có tinh thần học hỏi, muốn làm việc với giao diện web, dữ liệu và quy trình nhóm, tôi rất sẵn sàng trao đổi.
            </p>
            <div className="mt-8 space-y-4 text-slate-200">
              <p><span className="text-slate-400">Email:</span> khanh51024@gmail.com</p>
              <p><span className="text-slate-400">Điện thoại:</span> 0328405706</p>
              <p><span className="text-slate-400">Địa chỉ:</span> TP. Đà Lạt, Lâm Đồng</p>
              <p>
                <span className="text-slate-400">GitHub:</span>{" "}
                <a href="https://github.com/NamKhanhCTK46B" target="_blank" rel="noreferrer" className="font-medium text-blue-300 transition hover:text-blue-200">
                  github.com/NamKhanhCTK46B
                </a>
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">
            <form className="grid gap-4">
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400" placeholder="Họ và tên" />
              <input className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400" placeholder="Email" type="email" />
              <textarea className="min-h-36 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none placeholder:text-slate-400 focus:border-blue-400" placeholder="Nội dung liên hệ" />
              <a href="mailto:khanh51024@gmail.com?subject=Th%E1%BB%B1%20t%E1%BA%ADp%20-%20Nguy%E1%BB%85n%20Ho%C3%A0ng%20Nam%20Kh%C3%A1nh" className="rounded-2xl bg-blue-500 px-5 py-3 font-semibold text-white transition hover:bg-blue-400">
                Gửi qua email
              </a>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
