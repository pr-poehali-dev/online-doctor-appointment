import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar } from '@/components/ui/calendar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';

const doctors = [
  {
    id: 1,
    name: 'Анна Петрова',
    specialty: 'Терапевт',
    experience: '15 лет',
    rating: 4.9,
    reviews: 234,
    photo: 'https://cdn.poehali.dev/projects/983eaa2a-b688-49dd-80c2-f96ad215fb90/files/8323adff-bf9b-4e74-b491-592543b591c5.jpg',
    price: '2500 ₽',
    education: 'Первый МГМУ им. И.М. Сеченова',
    availableSlots: ['09:00', '10:30', '14:00', '16:30']
  },
  {
    id: 2,
    name: 'Сергей Иванов',
    specialty: 'Кардиолог',
    experience: '20 лет',
    rating: 4.8,
    reviews: 189,
    photo: 'https://cdn.poehali.dev/projects/983eaa2a-b688-49dd-80c2-f96ad215fb90/files/25e2da05-b93a-43fa-943c-b7dfc2b67c8f.jpg',
    price: '3500 ₽',
    education: 'РНИМУ им. Н.И. Пирогова',
    availableSlots: ['11:00', '13:30', '15:00', '17:00']
  },
  {
    id: 3,
    name: 'Мария Козлова',
    specialty: 'Педиатр',
    experience: '10 лет',
    rating: 5.0,
    reviews: 312,
    photo: 'https://cdn.poehali.dev/projects/983eaa2a-b688-49dd-80c2-f96ad215fb90/files/73d8a227-92f4-4cf1-a77f-5acf60e158ab.jpg',
    price: '2800 ₽',
    education: 'СПбГПМУ',
    availableSlots: ['09:30', '11:30', '14:30', '16:00']
  }
];

const services = [
  { name: 'Консультация терапевта', price: '2500 ₽', duration: '30 мин' },
  { name: 'Кардиологическое обследование', price: '3500 ₽', duration: '45 мин' },
  { name: 'Педиатрический осмотр', price: '2800 ₽', duration: '40 мин' },
  { name: 'УЗИ диагностика', price: '2000 ₽', duration: '20 мин' },
  { name: 'Анализы крови', price: '1500 ₽', duration: '15 мин' },
  { name: 'ЭКГ', price: '1200 ₽', duration: '15 мин' }
];

const faqs = [
  {
    question: 'Как записаться на приём?',
    answer: 'Выберите нужного специалиста, дату и удобное время. Подтвердите запись — и готово!'
  },
  {
    question: 'Можно ли отменить запись?',
    answer: 'Да, отменить запись можно не позднее чем за 3 часа до приёма через личный кабинет или по телефону.'
  },
  {
    question: 'Нужна ли предоплата?',
    answer: 'Нет, оплата производится после приёма. Принимаем наличные и карты.'
  },
  {
    question: 'Как долго ждать результаты анализов?',
    answer: 'Большинство анализов готовы через 1-2 дня. Результаты придут на email и будут доступны в личном кабинете.'
  }
];

const Index = () => {
  const [selectedDoctor, setSelectedDoctor] = useState(doctors[0]);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleBooking = () => {
    if (selectedDate && selectedTime) {
      alert(`Запись подтверждена!\n\nВрач: ${selectedDoctor.name}\nДата: ${selectedDate.toLocaleDateString('ru-RU')}\nВремя: ${selectedTime}\n\nМы отправили подтверждение на вашу почту.`);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-secondary">
      <header className="bg-white border-b sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Icon name="Heart" className="text-primary" size={32} />
              <h1 className="text-2xl font-bold font-sans text-primary">МедЦентр</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#doctors" className="text-foreground hover:text-primary transition-colors">Врачи</a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors">Услуги</a>
              <a href="#booking" className="text-foreground hover:text-primary transition-colors">Запись</a>
              <a href="#faq" className="text-foreground hover:text-primary transition-colors">FAQ</a>
              <Button variant="outline" size="sm">
                <Icon name="Phone" size={16} className="mr-2" />
                8 (800) 555-35-35
              </Button>
            </nav>
            <Button className="md:hidden" variant="ghost" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="py-16 md:py-24 bg-gradient-to-r from-primary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <Badge className="mb-4" variant="secondary">
              <Icon name="Sparkles" size={14} className="mr-1" />
              Онлайн-запись 24/7
            </Badge>
            <h2 className="text-4xl md:text-6xl font-bold font-sans mb-6 text-foreground">
              Запись к врачу онлайн: современный подход
            </h2>
            <p className="text-xl text-muted-foreground mb-8 font-body">
              Выбирайте специалиста, дату и время онлайн. Без очередей и звонков.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="text-lg" onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}>
                <Icon name="Calendar" size={20} className="mr-2" />
                Записаться на приём
              </Button>
              <Button size="lg" variant="outline" className="text-lg">
                <Icon name="Phone" size={20} className="mr-2" />
                Позвонить
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="doctors" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Наши специалисты</Badge>
            <h3 className="text-3xl md:text-4xl font-bold font-sans mb-4">Врачи с многолетним опытом</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Профессионалы с подтверждённой квалификацией и сотнями довольных пациентов
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="relative mb-4">
                    <img 
                      src={doctor.photo} 
                      alt={doctor.name}
                      className="w-full h-64 object-cover rounded-lg"
                    />
                    <Badge className="absolute top-2 right-2 bg-accent">
                      <Icon name="Star" size={14} className="mr-1" />
                      {doctor.rating}
                    </Badge>
                  </div>
                  <CardTitle className="font-sans">{doctor.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Stethoscope" size={16} />
                    {doctor.specialty}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="GraduationCap" size={16} />
                    <span>{doctor.education}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="Award" size={16} />
                    <span>Опыт: {doctor.experience}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Icon name="MessageCircle" size={16} />
                    <span>{doctor.reviews} отзывов</span>
                  </div>
                  <div className="pt-2 border-t">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">{doctor.price}</span>
                      <Button 
                        onClick={() => {
                          setSelectedDoctor(doctor);
                          setSelectedTime('');
                          document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                      >
                        Записаться
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">Услуги</Badge>
            <h3 className="text-3xl md:text-4xl font-bold font-sans mb-4">Наши медицинские услуги</h3>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Полный спектр медицинских услуг с современным оборудованием
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <Card key={idx} className="hover:shadow-md transition-all">
                <CardHeader>
                  <CardTitle className="text-lg font-sans">{service.name}</CardTitle>
                  <CardDescription className="flex items-center gap-2">
                    <Icon name="Clock" size={14} />
                    {service.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-primary">{service.price}</span>
                    <Button variant="outline" size="sm">Записаться</Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="booking" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">
              <Icon name="CalendarCheck" size={14} className="mr-1" />
              Онлайн-запись
            </Badge>
            <h3 className="text-3xl md:text-4xl font-bold font-sans mb-4">Запишитесь на приём</h3>
            <p className="text-muted-foreground text-lg">
              Выберите врача, дату и удобное время
            </p>
          </div>
          
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="step1" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
                <TabsTrigger value="step1">1. Врач</TabsTrigger>
                <TabsTrigger value="step2" disabled={!selectedDoctor}>2. Дата и время</TabsTrigger>
                <TabsTrigger value="step3" disabled={!selectedDate || !selectedTime}>3. Подтверждение</TabsTrigger>
              </TabsList>
              
              <TabsContent value="step1" className="space-y-4">
                <div className="grid md:grid-cols-3 gap-4">
                  {doctors.map((doctor) => (
                    <Card 
                      key={doctor.id}
                      className={`cursor-pointer transition-all ${selectedDoctor.id === doctor.id ? 'ring-2 ring-primary' : 'hover:shadow-md'}`}
                      onClick={() => setSelectedDoctor(doctor)}
                    >
                      <CardHeader>
                        <img src={doctor.photo} alt={doctor.name} className="w-full h-40 object-cover rounded-md mb-3" />
                        <CardTitle className="text-lg">{doctor.name}</CardTitle>
                        <CardDescription>{doctor.specialty}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-primary">{doctor.price}</span>
                          <Badge variant={selectedDoctor.id === doctor.id ? "default" : "outline"}>
                            {selectedDoctor.id === doctor.id ? 'Выбран' : 'Выбрать'}
                          </Badge>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
                <div className="flex justify-end">
                  <Button size="lg" onClick={() => document.querySelector('[value="step2"]')?.dispatchEvent(new MouseEvent('click'))}>
                    Далее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="step2" className="space-y-6">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Calendar" size={20} />
                      Выберите дату
                    </h4>
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      className="rounded-md border"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 flex items-center gap-2">
                      <Icon name="Clock" size={20} />
                      Доступное время
                    </h4>
                    {selectedDate ? (
                      <div className="grid grid-cols-2 gap-3">
                        {selectedDoctor.availableSlots.map((slot) => (
                          <Button
                            key={slot}
                            variant={selectedTime === slot ? "default" : "outline"}
                            className="h-12"
                            onClick={() => setSelectedTime(slot)}
                          >
                            {slot}
                          </Button>
                        ))}
                      </div>
                    ) : (
                      <p className="text-muted-foreground">Сначала выберите дату</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => document.querySelector('[value="step1"]')?.dispatchEvent(new MouseEvent('click'))}>
                    <Icon name="ArrowLeft" size={18} className="mr-2" />
                    Назад
                  </Button>
                  <Button size="lg" disabled={!selectedTime} onClick={() => document.querySelector('[value="step3"]')?.dispatchEvent(new MouseEvent('click'))}>
                    Далее
                    <Icon name="ArrowRight" size={18} className="ml-2" />
                  </Button>
                </div>
              </TabsContent>
              
              <TabsContent value="step3" className="space-y-6">
                <Card className="bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon name="CheckCircle" className="text-accent" />
                      Подтверждение записи
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-4">
                      <img src={selectedDoctor.photo} alt={selectedDoctor.name} className="w-20 h-20 rounded-lg object-cover" />
                      <div className="flex-1">
                        <h4 className="font-semibold text-lg">{selectedDoctor.name}</h4>
                        <p className="text-muted-foreground">{selectedDoctor.specialty}</p>
                        <p className="text-sm text-muted-foreground mt-1">{selectedDoctor.education}</p>
                      </div>
                    </div>
                    <div className="border-t pt-4 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Calendar" size={16} />
                          Дата:
                        </span>
                        <span className="font-semibold">{selectedDate?.toLocaleDateString('ru-RU', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-muted-foreground flex items-center gap-2">
                          <Icon name="Clock" size={16} />
                          Время:
                        </span>
                        <span className="font-semibold">{selectedTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-lg border-t pt-2">
                        <span className="font-semibold">Стоимость:</span>
                        <span className="font-bold text-primary text-2xl">{selectedDoctor.price}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <div className="flex justify-between">
                  <Button variant="outline" onClick={() => document.querySelector('[value="step2"]')?.dispatchEvent(new MouseEvent('click'))}>
                    <Icon name="ArrowLeft" size={18} className="mr-2" />
                    Назад
                  </Button>
                  <Button size="lg" className="bg-accent hover:bg-accent/90" onClick={handleBooking}>
                    <Icon name="CheckCircle" size={20} className="mr-2" />
                    Подтвердить запись
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <section id="faq" className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <Badge className="mb-4" variant="secondary">FAQ</Badge>
            <h3 className="text-3xl md:text-4xl font-bold font-sans mb-4">Часто задаваемые вопросы</h3>
            <p className="text-muted-foreground text-lg">
              Ответы на популярные вопросы наших пациентов
            </p>
          </div>
          <Accordion type="single" collapsible className="max-w-3xl mx-auto">
            {faqs.map((faq, idx) => (
              <AccordionItem key={idx} value={`item-${idx}`}>
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Heart" size={28} />
                <h4 className="text-xl font-bold">МедЦентр</h4>
              </div>
              <p className="text-white/70">
                Современный подход к вашему здоровью
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Контакты</h5>
              <div className="space-y-2 text-white/70">
                <p className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  8 (800) 555-35-35
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@medcenter.ru
                </p>
                <p className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Москва, ул. Здоровья, д. 1
                </p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Режим работы</h5>
              <div className="space-y-1 text-white/70">
                <p>Пн-Пт: 08:00 - 20:00</p>
                <p>Сб: 09:00 - 18:00</p>
                <p>Вс: выходной</p>
              </div>
            </div>
            <div>
              <h5 className="font-semibold mb-3">Социальные сети</h5>
              <div className="flex gap-3">
                <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="icon" className="text-white hover:text-white/80">
                  <Icon name="Twitter" size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/60">
            <p>&copy; 2024 МедЦентр. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;