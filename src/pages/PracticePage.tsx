import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle, BookOpen, Calculator, BarChart3, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const topics = [
  { title: "Phương trình", count: 45, icon: Calculator },
  { title: "Hàm số", count: 38, icon: BarChart3 },
  { title: "Hình học", count: 42, icon: BookOpen },
  { title: "Bất phương trình", count: 30, icon: Calculator },
  { title: "Xác suất & Thống kê", count: 25, icon: BarChart3 },
  { title: "Lượng giác", count: 35, icon: Calculator },
];

const PracticePage = () => (
  <Layout>
    <section className="bg-secondary/50 py-12">
      <div className="container text-center">
        <h1 className="text-3xl font-bold text-foreground md:text-4xl">Luyện tập</h1>
        <p className="mt-2 text-muted-foreground">Bài tập theo chủ đề với 3 mức độ: cơ bản, vận dụng, nâng cao</p>
      </div>
    </section>
    <section className="py-10">
      <div className="container">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {topics.map((t) => (
            <div key={t.title} className="rounded-xl border bg-card p-6 shadow-card transition-all hover:shadow-elevated">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <t.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-1 text-lg font-semibold text-foreground">{t.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{t.count} bài tập</p>
              <div className="flex gap-2">
                <span className="rounded-full bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-700">Cơ bản</span>
                <span className="rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-700">Vận dụng</span>
                <span className="rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-700">Nâng cao</span>
              </div>
              <Button className="mt-4 w-full" size="sm">Bắt đầu luyện tập</Button>
            </div>
          ))}
        </div>

        {/* Daily Practice */}
        <div className="mt-12 rounded-2xl gradient-hero p-8 text-center">
          <h2 className="mb-2 text-2xl font-bold text-primary-foreground">📝 Bài tập hàng ngày</h2>
          <p className="mb-4 text-primary-foreground/70">5 bài tập mới mỗi ngày – tích lũy điểm, leo bảng xếp hạng!</p>
          <Button variant="accent" size="lg">Làm bài hôm nay <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </div>
      </div>
    </section>
  </Layout>
);

export default PracticePage;
