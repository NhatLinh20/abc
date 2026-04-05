import { useState } from "react";
import { Link } from "react-router-dom";
import { BookOpen, TrendingUp, Users, Clock, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";

const allCourses = [
  { id: 1, grade: 6, title: "Toán 6 – Số học & Hình học", lessons: 30, level: "Cơ bản", price: "299.000đ", students: 320 },
  { id: 2, grade: 7, title: "Toán 7 – Đại số & Hình học", lessons: 32, level: "Cơ bản", price: "299.000đ", students: 280 },
  { id: 3, grade: 8, title: "Toán 8 – Phương trình & Hình học", lessons: 35, level: "Cơ bản → TB", price: "349.000đ", students: 350 },
  { id: 4, grade: 9, title: "Toán 9 – Ôn Thi Vào 10", lessons: 40, level: "TB → Nâng cao", price: "499.000đ", students: 800, badge: "Hot" },
  { id: 5, grade: 10, title: "Toán 10 – Đại số & Hình học", lessons: 35, level: "Cơ bản → TB", price: "399.000đ", students: 420 },
  { id: 6, grade: 11, title: "Toán 11 – Giải tích & Hình học", lessons: 38, level: "TB → Nâng cao", price: "449.000đ", students: 380 },
  { id: 7, grade: 12, title: "Toán 12 – Ôn Thi THPT QG", lessons: 50, level: "Cơ bản → Nâng cao", price: "599.000đ", students: 950, badge: "Mới" },
  { id: 8, grade: 9, title: "Toán 9 – Hình học nâng cao", lessons: 20, level: "Nâng cao", price: "349.000đ", students: 200 },
  { id: 9, grade: 12, title: "Luyện đề THPT QG – 30 đề", lessons: 30, level: "Nâng cao", price: "399.000đ", students: 600, badge: "Hot" },
];

const gradeFilters = [0, 6, 7, 8, 9, 10, 11, 12];

const CoursesPage = () => {
  const [selectedGrade, setSelectedGrade] = useState(0);
  const filtered = selectedGrade === 0 ? allCourses : allCourses.filter((c) => c.grade === selectedGrade);

  return (
    <Layout>
      <section className="bg-secondary/50 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Khóa học Toán</h1>
          <p className="mt-2 text-muted-foreground">Chương trình từ lớp 6 đến 12 theo chuẩn SGK Việt Nam</p>
        </div>
      </section>

      <section className="py-10">
        <div className="container">
          <div className="mb-8 flex flex-wrap items-center gap-2">
            <Filter className="h-4 w-4 text-muted-foreground" />
            {gradeFilters.map((g) => (
              <button
                key={g}
                onClick={() => setSelectedGrade(g)}
                className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  selectedGrade === g
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                }`}
              >
                {g === 0 ? "Tất cả" : `Lớp ${g}`}
              </button>
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((c) => (
              <div
                key={c.id}
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
                    <li className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" /> {c.students}+ học sinh</li>
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{c.price}</span>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">Chi tiết</Button>
                      <Button size="sm">Đăng ký</Button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CoursesPage;
