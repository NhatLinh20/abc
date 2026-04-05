import { useState } from "react";
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Đã gửi thành công!", description: "Chúng tôi sẽ liên hệ lại bạn sớm nhất." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="bg-secondary/50 py-12">
        <div className="container text-center">
          <h1 className="text-3xl font-bold text-foreground md:text-4xl">Liên hệ</h1>
          <p className="mt-2 text-muted-foreground">Để lại thông tin, chúng tôi sẽ liên hệ tư vấn miễn phí</p>
        </div>
      </section>

      <section className="py-12">
        <div className="container max-w-4xl">
          <div className="grid gap-8 md:grid-cols-5">
            <div className="md:col-span-2 space-y-6">
              <div className="rounded-xl border bg-card p-6 shadow-card">
                <h3 className="mb-4 font-semibold text-foreground">Thông tin liên hệ</h3>
                <ul className="space-y-4 text-sm text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Email</div>
                      contact@mathvn.edu.vn
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <Phone className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Điện thoại / Zalo</div>
                      0912 345 678
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Địa chỉ</div>
                      Hà Nội, Việt Nam
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <MessageCircle className="mt-0.5 h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium text-foreground">Zalo OA</div>
                      @MathVN
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="md:col-span-3">
              <form onSubmit={handleSubmit} className="rounded-xl border bg-card p-6 shadow-card space-y-4">
                <h3 className="mb-2 font-semibold text-foreground">Gửi tin nhắn</h3>
                <Input
                  placeholder="Họ và tên"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                />
                <Input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                />
                <Input
                  placeholder="Số điện thoại"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                />
                <Textarea
                  placeholder="Nội dung tin nhắn..."
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                />
                <Button type="submit" className="w-full">Gửi tin nhắn</Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
