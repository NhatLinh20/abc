import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  GraduationCap,
  TrendingUp,
  Trophy,
  BookOpen,
  CheckCircle,
  Star,
  ArrowRight,
  Users,
  Target,
  Sparkles,
} from "lucide-react";
import Layout from "@/components/Layout";

const stats = [
  { icon: GraduationCap, value: "5,000+", label: "Học sinh" },
  { icon: TrendingUp, value: "95%", label: "Cải thiện điểm số" },
  { icon: Trophy, value: "10+", label: "Năm kinh nghiệm" },
  { icon: BookOpen, value: "500+", label: "Bài giảng" },
];

const benefits = [
  {
    icon: Target,
    title: "Giải thích dễ hiểu",
    desc: "Mỗi khái niệm được giảng giải từng bước, từ cơ bản đến nâng cao theo chuẩn SGK.",
  },
  {
    icon: BookOpen,
    title: "Bài tập đa dạng",
    desc: "Hệ thống bài tập 3 mức độ: cơ bản, vận dụng, nâng cao kèm lời giải chi tiết.",
  },
  {
    icon: Trophy,
    title: "Ôn thi hiệu quả",
    desc: "Đề thi thử vào 10 và THPT Quốc Gia với chấm điểm tự động và phân tích kết quả.",
  },
  {
    icon: Sparkles,
    title: "Trợ lý AI thông minh",
    desc: "Hỗ trợ giải đáp thắc mắc 24/7, gợi ý bài tập phù hợp với trình độ.",
  },
];

const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    grade: "Học sinh lớp 10",
    text: "Em đã tăng từ 6 lên 9 điểm Toán sau 3 tháng học. Các bài giảng rất dễ hiểu và có hệ thống!",
    stars: 5,
  },
  {
    name: "Trần Đức Huy",
    grade: "Học sinh lớp 9",
    text: "Nhờ MathVN, em đã đỗ vào trường chuyên với điểm Toán 9.5. Thầy giảng cực kỳ dễ hiểu!",
    stars: 5,
  },
  {
    name: "Phạm Thu Hà",
    grade: "Phụ huynh",
    text: "Con tôi tiến bộ rõ rệt sau khi học trên MathVN. Bài tập có phân loại mức độ rất khoa học.",
    stars: 5,
  },
];

const grades = [
  { grade: "6", label: "Toán 6" },
  { grade: "7", label: "Toán 7" },
  { grade: "8", label: "Toán 8" },
  { grade: "9", label: "Toán 9" },
  { grade: "10", label: "Toán 10" },
  { grade: "11", label: "Toán 11" },
  { grade: "12", label: "Toán 12" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden gradient-hero py-20 md:py-28">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 text-6xl font-bold text-primary-foreground/20">∑</div>
        <div className="absolute top-20 right-20 text-5xl font-bold text-primary-foreground/20">π</div>
        <div className="absolute bottom-20 left-1/4 text-4xl font-bold text-primary-foreground/20">∫</div>
        <div className="absolute bottom-10 right-1/3 text-5xl font-bold text-primary-foreground/20">√</div>
        <div className="absolute top-1/2 right-10 text-3xl font-bold text-primary-foreground/20">Δ</div>
      </div>
      <div className="container relative">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm font-medium text-primary-foreground/80">
            <Sparkles className="h-4 w-4" />
            Theo chuẩn SGK Việt Nam
          </div>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-primary-foreground md:text-5xl lg:text-6xl">
            Học Toán Thông Minh –{" "}
            <span className="bg-gradient-to-r from-amber-300 to-orange-400 bg-clip-text text-transparent">
              Chinh Phục Mọi Kỳ Thi
            </span>
          </h1>
          <p className="mb-8 text-lg text-primary-foreground/70 md:text-xl">
            Hệ thống học Toán từ lớp 6 đến 12 theo chuẩn SGK Việt Nam, giúp bạn hiểu sâu – làm nhanh – đạt điểm cao.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button variant="accent" size="lg" className="text-base" asChild>
              <Link to="/khoa-hoc">
                Học thử miễn phí <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="heroOutline" size="lg" className="text-base" asChild>
              <Link to="/khoa-hoc">Xem khóa học</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>

    {/* Stats */}
    <section className="relative -mt-10 z-10">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-card p-6 shadow-elevated md:grid-cols-4 md:p-8">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2 text-center">
              <s.icon className="h-8 w-8 text-primary" />
              <div className="text-2xl font-bold text-foreground md:text-3xl">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Grades quick links */}
    <section className="py-16">
      <div className="container">
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Chọn lớp của bạn</h2>
          <p className="mt-2 text-muted-foreground">Chương trình học theo chuẩn SGK từ lớp 6 đến 12</p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {grades.map((g) => (
            <Link
              key={g.grade}
              to="/khoa-hoc"
              className="group flex h-20 w-20 flex-col items-center justify-center rounded-xl border bg-card shadow-card transition-all hover:shadow-elevated hover:border-primary md:h-24 md:w-24"
            >
              <span className="text-2xl font-bold text-primary md:text-3xl">{g.grade}</span>
              <span className="text-xs text-muted-foreground group-hover:text-primary transition-colors">{g.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Benefits */}
    <section className="bg-secondary/50 py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Tại sao chọn MathVN?</h2>
          <p className="mt-2 text-muted-foreground">Phương pháp học Toán hiệu quả nhất cho học sinh Việt Nam</p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-elevated"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <b.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">{b.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Course Preview */}
    <section className="py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Khóa học nổi bật</h2>
          <p className="mt-2 text-muted-foreground">Được hàng ngàn học sinh tin tưởng lựa chọn</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { title: "Toán 9 – Ôn Thi Vào 10", lessons: 40, level: "Trung bình → Nâng cao", price: "499.000đ", badge: "Hot" },
            { title: "Toán 12 – Ôn Thi THPT QG", lessons: 50, level: "Cơ bản → Nâng cao", price: "599.000đ", badge: "Mới" },
            { title: "Toán 10 – Đại số & Hình học", lessons: 35, level: "Cơ bản → Trung bình", price: "399.000đ", badge: "" },
          ].map((c) => (
            <div
              key={c.title}
              className="group relative overflow-hidden rounded-xl border bg-card shadow-card transition-all hover:shadow-elevated"
            >
              <div className="gradient-primary h-2" />
              <div className="p-6">
                {c.badge && (
                  <span className="mb-3 inline-block rounded-full gradient-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                    {c.badge}
                  </span>
                )}
                <h3 className="mb-3 text-lg font-bold text-foreground">{c.title}</h3>
                <ul className="mb-4 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2"><BookOpen className="h-4 w-4 text-primary" /> {c.lessons} bài giảng</li>
                  <li className="flex items-center gap-2"><TrendingUp className="h-4 w-4 text-primary" /> {c.level}</li>
                  <li className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> 500+ học sinh</li>
                </ul>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{c.price}</span>
                  <Button size="sm" asChild>
                    <Link to="/khoa-hoc">Xem chi tiết</Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Button variant="outline" size="lg" asChild>
            <Link to="/khoa-hoc">Xem tất cả khóa học <ArrowRight className="ml-1 h-4 w-4" /></Link>
          </Button>
        </div>
      </div>
    </section>

    {/* Testimonials */}
    <section className="bg-secondary/50 py-16">
      <div className="container">
        <div className="mb-10 text-center">
          <h2 className="text-2xl font-bold text-foreground md:text-3xl">Cảm nhận học sinh</h2>
          <p className="mt-2 text-muted-foreground">Những chia sẻ từ học sinh và phụ huynh</p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <div key={t.name} className="rounded-xl border bg-card p-6 shadow-card">
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.grade}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Daily Practice CTA */}
    <section className="py-16">
      <div className="container">
        <div className="rounded-2xl gradient-hero p-8 text-center md:p-12">
          <div className="mx-auto max-w-2xl">
            <Sparkles className="mx-auto mb-4 h-10 w-10 text-amber-400" />
            <h2 className="mb-4 text-2xl font-bold text-primary-foreground md:text-3xl">
              Luyện Toán mỗi ngày
            </h2>
            <p className="mb-6 text-primary-foreground/70">
              Thử thách bản thân với bài tập hàng ngày, leo bảng xếp hạng và nhận phần thưởng!
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button variant="accent" size="lg" asChild>
                <Link to="/luyen-tap">Bắt đầu ngay <ArrowRight className="ml-1 h-4 w-4" /></Link>
              </Button>
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/on-thi">Thi thử miễn phí</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
