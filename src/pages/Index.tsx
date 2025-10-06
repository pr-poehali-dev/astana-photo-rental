import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import Icon from '@/components/ui/icon';
import { useTranslation } from 'react-i18next';
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';

interface EquipmentItem {
  id: number;
  title: string;
  category: string;
  price: string;
  pricePerDay: string;
  icon: string;
  description: string;
}

const Index = () => {
  const { t, i18n } = useTranslation();
  const [activeSection, setActiveSection] = useState('home');
  const [selectedEquipment, setSelectedEquipment] = useState<EquipmentItem | null>(null);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerNotes, setCustomerNotes] = useState('');
  const { toast } = useToast();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  const equipment = [
    {
      id: 1,
      title: t('equipment.items.sony.title'),
      category: t('equipment.categories.cameras'),
      price: '15 000 ₸',
      pricePerDay: t('equipment.perDay'),
      icon: 'Camera',
      description: t('equipment.items.sony.description'),
    },
    {
      id: 2,
      title: t('equipment.items.canon.title'),
      category: t('equipment.categories.lenses'),
      price: '5 000 ₸',
      pricePerDay: t('equipment.perDay'),
      icon: 'Circle',
      description: t('equipment.items.canon.description'),
    },
    {
      id: 3,
      title: t('equipment.items.godox.title'),
      category: t('equipment.categories.lighting'),
      price: '8 000 ₸',
      pricePerDay: t('equipment.perDay'),
      icon: 'Lightbulb',
      description: t('equipment.items.godox.description'),
    },
    {
      id: 4,
      title: t('equipment.items.dji.title'),
      category: t('equipment.categories.stabilization'),
      price: '12 000 ₸',
      pricePerDay: t('equipment.perDay'),
      icon: 'Video',
      description: t('equipment.items.dji.description'),
    },
    {
      id: 5,
      title: t('equipment.items.rode.title'),
      category: t('equipment.categories.audio'),
      price: '6 000 ₸',
      pricePerDay: t('equipment.perDay'),
      icon: 'Mic',
      description: t('equipment.items.rode.description'),
    },
    {
      id: 6,
      title: t('equipment.items.manfrotto.title'),
      category: t('equipment.categories.tripods'),
      price: '4 000 ₸',
      pricePerDay: t('equipment.perDay'),
      icon: 'Triangle',
      description: t('equipment.items.manfrotto.description'),
    },
  ];

  const rentalTerms = [
    {
      title: t('terms.booking.title'),
      description: t('terms.booking.description'),
    },
    {
      title: t('terms.deposit.title'),
      description: t('terms.deposit.description'),
    },
    {
      title: t('terms.return.title'),
      description: t('terms.return.description'),
    },
    {
      title: t('terms.delivery.title'),
      description: t('terms.delivery.description'),
    },
  ];

  const scrollToSection = (section: string) => {
    setActiveSection(section);
    const element = document.getElementById(section);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookingClick = (item: EquipmentItem) => {
    setSelectedEquipment(item);
    setBookingOpen(true);
  };

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays > 0 ? diffDays : 0;
  };

  const calculateTotal = () => {
    if (!selectedEquipment) return 0;
    const days = calculateDays();
    const pricePerDay = parseInt(selectedEquipment.price.replace(/\s/g, '').replace('₸', ''));
    return days * pricePerDay;
  };

  const handleSubmitBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!customerName || !customerPhone || !startDate || !endDate) {
      toast({
        title: t('booking.errorTitle'),
        description: t('booking.errorRequired'),
        variant: 'destructive',
      });
      return;
    }

    if (new Date(startDate) >= new Date(endDate)) {
      toast({
        title: t('booking.errorTitle'),
        description: t('booking.errorDate'),
        variant: 'destructive',
      });
      return;
    }

    toast({
      title: t('booking.successTitle'),
      description: t('booking.successDescription', { phone: customerPhone }),
    });

    setBookingOpen(false);
    setCustomerName('');
    setCustomerPhone('');
    setCustomerNotes('');
    setStartDate('');
    setEndDate('');
    setSelectedEquipment(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
        <div className="container flex h-16 items-center justify-between px-4 md:px-6">
          <div className="flex items-center gap-2">
            <Icon name="Camera" className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold tracking-tight">Fotoprokat_KZ</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection('home')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'home' ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              {t('header.catalog')}
            </button>
            <button
              onClick={() => scrollToSection('terms')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'terms' ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              {t('header.terms')}
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                activeSection === 'contact' ? 'text-primary' : 'text-foreground/60'
              }`}
            >
              {t('header.contact')}
            </button>
            <Select value={i18n.language} onValueChange={changeLanguage}>
              <SelectTrigger className="w-[80px] h-9">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ru">RU</SelectItem>
                <SelectItem value="en">EN</SelectItem>
                <SelectItem value="kk">KZ</SelectItem>
              </SelectContent>
            </Select>
          </nav>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Icon name="Menu" className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-left text-lg font-medium"
                >
                  {t('header.catalog')}
                </button>
                <button
                  onClick={() => scrollToSection('terms')}
                  className="text-left text-lg font-medium"
                >
                  {t('header.terms')}
                </button>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="text-left text-lg font-medium"
                >
                  {t('header.contact')}
                </button>
                <div className="mt-4">
                  <Select value={i18n.language} onValueChange={changeLanguage}>
                    <SelectTrigger className="w-full">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ru">Русский</SelectItem>
                      <SelectItem value="en">English</SelectItem>
                      <SelectItem value="kk">Қазақша</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main>
        <section id="home" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
                {t('hero.title')}
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('hero.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {equipment.map((item) => (
                <Card key={item.id} className="group hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-24 items-center justify-center rounded-lg bg-muted">
                      <Icon name={item.icon} className="h-12 w-12 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <p className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {item.category}
                      </p>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                      <div className="flex items-baseline gap-1 pt-2">
                        <span className="text-2xl font-bold text-primary">{item.price}</span>
                        <span className="text-sm text-muted-foreground">{item.pricePerDay}</span>
                      </div>
                    </div>
                    <Button className="w-full mt-4" size="lg" onClick={() => handleBookingClick(item)}>
                      {t('equipment.bookButton')}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="terms" className="py-16 md:py-24 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('terms.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('terms.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {rentalTerms.map((term, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-2">{term.title}</h3>
                    <p className="text-muted-foreground">{term.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">{t('terms.additionalInfo.title')}</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('terms.additionalInfo.item1')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('terms.additionalInfo.item2')}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <Icon name="Check" className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <span>{t('terms.additionalInfo.item3')}</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section id="contact" className="py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="mb-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{t('contact.title')}</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon name="Phone" className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{t('contact.phone')}</h3>
                  <a href="tel:+77001234567" className="text-primary hover:underline">
                    +7 700 123 45 67
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon name="MessageCircle" className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{t('contact.whatsapp')}</h3>
                  <a href="https://wa.me/77001234567" className="text-primary hover:underline">
                    +7 700 123 45 67
                  </a>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Icon name="MapPin" className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2">{t('contact.address')}</h3>
                  <p className="text-muted-foreground" style={{ whiteSpace: 'pre-line' }}>
                    {t('contact.addressText')}
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground mb-4">{t('contact.workingHours')}</p>
              <Button size="lg" className="gap-2">
                <Icon name="MessageCircle" className="h-5 w-5" />
                {t('contact.writeWhatsapp')}
              </Button>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-8 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Icon name="Camera" className="h-5 w-5 text-primary" />
              <span className="font-semibold">Fotoprokat_KZ</span>
            </div>
            <p className="text-sm text-muted-foreground">
              {t('footer.copyright')}
            </p>
          </div>
        </div>
      </footer>

      <Dialog open={bookingOpen} onOpenChange={setBookingOpen}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle>{t('booking.title')}</DialogTitle>
            <DialogDescription>
              {selectedEquipment?.title} — {selectedEquipment?.category}
            </DialogDescription>
          </DialogHeader>
          
          <form onSubmit={handleSubmitBooking} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">{t('booking.name')} *</Label>
              <Input
                id="name"
                value={customerName}
                onChange={(e) => setCustomerName(e.target.value)}
                placeholder={t('booking.namePlaceholder')}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">{t('booking.phone')} *</Label>
              <Input
                id="phone"
                type="tel"
                value={customerPhone}
                onChange={(e) => setCustomerPhone(e.target.value)}
                placeholder={t('booking.phonePlaceholder')}
                required
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="startDate">{t('booking.startDate')} *</Label>
                <Input
                  id="startDate"
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="endDate">{t('booking.endDate')} *</Label>
                <Input
                  id="endDate"
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  min={startDate || new Date().toISOString().split('T')[0]}
                  required
                />
              </div>
            </div>

            {startDate && endDate && calculateDays() > 0 && (
              <div className="p-4 bg-muted rounded-lg space-y-1">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('booking.days')}</span>
                  <span className="font-medium">{calculateDays()}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">{t('booking.pricePerDay')}</span>
                  <span className="font-medium">{selectedEquipment?.price}</span>
                </div>
                <div className="pt-2 border-t flex justify-between">
                  <span className="font-semibold">{t('booking.total')}</span>
                  <span className="text-xl font-bold text-primary">
                    {calculateTotal().toLocaleString('ru-RU')} ₸
                  </span>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="notes">{t('booking.comment')}</Label>
              <Textarea
                id="notes"
                value={customerNotes}
                onChange={(e) => setCustomerNotes(e.target.value)}
                placeholder={t('booking.commentPlaceholder')}
                rows={3}
              />
            </div>

            <div className="flex gap-3 pt-2">
              <Button type="button" variant="outline" className="flex-1" onClick={() => setBookingOpen(false)}>
                {t('booking.cancel')}
              </Button>
              <Button type="submit" className="flex-1">
                {t('booking.submit')}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Index;