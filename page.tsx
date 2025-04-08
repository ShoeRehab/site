
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';
import { FaFacebookMessenger, FaInstagram, FaTelegramPlane, FaWhatsapp } from 'react-icons/fa';

export default function Home() {
  const [language, setLanguage] = useState('pl');

  const translations = {
    pl: {
      contactUs: 'Formularz kontaktowy',
      courier: 'Zamów kuriera',
      send: 'Wyślij',
      phone: 'Telefon',
      email: 'Email',
      message: 'Wiadomość',
      name: 'Imię i nazwisko',
      address: 'Adres do odbioru',
      courierNote: 'Cena ustalana indywidualnie.',
      hours: 'Godziny otwarcia: Pon - Czw, 11:00 - 17:00'
    },
    ua: {
      contactUs: 'Форма заявки',
      courier: 'Замовити курʼєра',
      send: 'Відправити',
      phone: 'Телефон',
      email: 'Електронна пошта',
      message: 'Повідомлення',
      name: "Ім'я та прізвище",
      address: 'Адреса для забору',
      courierNote: 'Ціна обговорюється індивідуально.',
      hours: 'Графік роботи: Пн - Чт, 11:00 - 17:00'
    },
    en: {
      contactUs: 'Contact Form',
      courier: 'Order a Courier',
      send: 'Send',
      phone: 'Phone',
      email: 'Email',
      message: 'Message',
      name: 'Full Name',
      address: 'Pickup Address',
      courierNote: 'Price negotiable individually.',
      hours: 'Working hours: Mon - Thu, 11:00 - 17:00'
    }
  };

  const t = translations[language];

  return (
    <main className="p-6 max-w-xl mx-auto space-y-10">
      <div className="flex justify-end gap-2">
        <Button onClick={() => setLanguage('pl')}>PL</Button>
        <Button onClick={() => setLanguage('ua')}>UA</Button>
        <Button onClick={() => setLanguage('en')}>EN</Button>
      </div>

      <h2 className="text-xl font-semibold">{t.contactUs}</h2>
      <form className="space-y-4">
        <Input placeholder={t.name} required />
        <Input type="email" placeholder={t.email} required />
        <Input type="tel" placeholder={t.phone} required />
        <Textarea placeholder={t.message} required />
        <Button type="submit">{t.send}</Button>
      </form>

      <h2 className="text-xl font-semibold">{t.courier}</h2>
      <form className="space-y-4">
        <Input placeholder={t.name} required />
        <Input placeholder={t.address} required />
        <Textarea placeholder={t.message} />
        <p className="text-sm text-muted-foreground">{t.courierNote}</p>
        <Button type="submit">{t.send}</Button>
      </form>

      <div className="space-y-2">
        <p className="text-lg font-semibold">{t.hours}</p>
        <div className="flex gap-4 text-2xl">
          <a href="https://t.me/+48728200670" target="_blank" rel="noopener"><FaTelegramPlane /></a>
          <a href="https://wa.me/48728200670" target="_blank" rel="noopener"><FaWhatsapp /></a>
          <a href="https://www.facebook.com/share/16HeBvywdp/?mibextid=wwXIfr" target="_blank" rel="noopener"><FaFacebookMessenger /></a>
          <a href="https://www.instagram.com/shoerehab.pl?igsh=aHlnNnhkdXBmYmF3" target="_blank" rel="noopener"><FaInstagram /></a>
          <a href="mailto:shoerehabgd@gmail.com"><Mail /></a>
        </div>
      </div>
    </main>
  );
}
