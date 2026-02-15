import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HubungiKami = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Endpoint Google Apps Script (User needs to deploy this script)
    // Script Code for reference:
    /*
      function doPost(e) {
        var sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/1E9P5TYuaBwwNGpaOQnQ6NAa8-4Qvodq35Iabak0EK5k/edit?usp=sharing").getActiveSheet();
        var data = JSON.parse(e.postData.contents);
        sheet.appendRow([new Date(), data.name, data.email, data.phone, data.message]);
        return ContentService.createTextOutput(JSON.stringify({"result": "success"})).setMimeType(ContentService.MimeType.JSON);
      }
    */
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxvuLmT-C5z0JcxV_p51nIIzSIrwPPC3ohubdJpSuveY-EM0ZB19etIgmAqxm20_xSo/exec";

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(formData),
      });

      toast({
        title: "Pesan Terkirim!",
        description: "Terima kasih! Kami akan segera menghubungi Anda.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Gagal Mengirim",
        description: "Terjadi kesalahan. Silakan coba lagi nanti.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <section className="py-12 px-4 bg-gradient-subtle">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Hubungi Kami
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Konsultasi gratis untuk membahas proyek dan kebutuhan bisnis Anda
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="border-border/50 shadow-soft">
              <CardContent className="pt-6">
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Kirim Pesan
                </h2>
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Nama Lengkap</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      required
                      value={formData.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      required
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">No. Telepon</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="08123456789"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Ceritakan Proyek Anda</Label>
                    <Textarea
                      id="message"
                      placeholder="Saya ingin membuat website untuk..."
                      rows={5}
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground group"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Mengirim...
                      </>
                    ) : (
                      <>
                        Kirim Pesan
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Informasi Kontak
                </h2>
                <p className="text-muted-foreground mb-8">
                  Jangan ragu untuk menghubungi kami melalui salah satu cara di bawah ini. Tim kami siap membantu Anda.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Email</h3>
                    <p className="text-muted-foreground">stepup.project6@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Telepon</h3>
                    <p className="text-muted-foreground">+62 822 6219 1159</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Lokasi</h3>
                    <p className="text-muted-foreground">Sleman, Daerah Istimewa Yogyakarta</p>
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-lg bg-secondary/50 border border-border">
                <h3 className="font-semibold text-foreground mb-2">Jam Operasional</h3>
                <p className="text-muted-foreground text-sm">
                  Senin - Jumat: 08.00 - 18.00 WIB<br />
                  Sabtu - Minggu: 08.00 - 22.00 WIB
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HubungiKami;
