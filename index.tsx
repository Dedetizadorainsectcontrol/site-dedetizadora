
'use client';
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MapPin, BugOff, ShieldCheck } from "lucide-react";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white text-black font-sans">
      <header className="bg-green-700 text-white p-6 shadow-md flex items-center justify-between">
        <h1 className="text-2xl font-bold">Dedetizadora Insect Control</h1>
        <a href="https://wa.me/5522999555454" className="bg-white text-green-700 px-4 py-2 rounded-xl font-medium hover:bg-green-100">WhatsApp</a>
      </header>

      <section className="bg-green-50 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Sua residência livre de pragas</h2>
        <p className="max-w-2xl mx-auto text-lg">Atendimento profissional em Barra de São João e região. Controle eficaz de baratas, ratos, cupins, formigas, pombos, morcegos e mais.</p>
        <Button className="mt-6 bg-green-700 hover:bg-green-800 text-white text-lg px-6 py-3 rounded-2xl" asChild>
          <a href="https://wa.me/5522999555454">Solicitar Orçamento</a>
        </Button>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
        {[
          { icon: <BugOff className="w-10 h-10" />, title: "Controle de Pragas", desc: "Baratas, ratos, formigas, cupins e muito mais." },
          { icon: <ShieldCheck className="w-10 h-10" />, title: "Ambiente Seguro", desc: "Produtos certificados, seguros para crianças e pets." },
          { icon: <MapPin className="w-10 h-10" />, title: "Atendimento Regional", desc: "Barra de São João, Rio das Ostras, Macaé e arredores." },
        ].map(({ icon, title, desc }, i) => (
          <Card key={i} className="rounded-2xl shadow-md">
            <CardContent className="p-6 text-center">
              <div className="mb-4 mx-auto text-green-700">{icon}</div>
              <h3 className="text-xl font-semibold mb-2">{title}</h3>
              <p>{desc}</p>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="bg-gray-100 py-10 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Depoimentos</h3>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { name: "João P.", text: "Excelente serviço, minha casa ficou livre das baratas no mesmo dia!" },
            { name: "Maria C.", text: "Atendimento rápido e muito profissional. Recomendo!" },
          ].map(({ name, text }, i) => (
            <Card key={i} className="rounded-2xl shadow-sm">
              <CardContent className="p-6">
                <p className="italic mb-2">“{text}”</p>
                <p className="text-sm font-medium">— {name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-10 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Solicite um Orçamento</h3>
        <form className="max-w-xl mx-auto grid gap-4 text-left">
          <input className="border p-3 rounded-xl" type="text" placeholder="Nome" />
          <input className="border p-3 rounded-xl" type="tel" placeholder="Telefone" />
          <input className="border p-3 rounded-xl" type="text" placeholder="Cidade" />
          <textarea className="border p-3 rounded-xl" placeholder="Serviço desejado" rows={4} />
          <Button className="bg-green-700 hover:bg-green-800 text-white rounded-2xl text-lg px-6 py-3" asChild>
            <a href="https://wa.me/5522999555454">Enviar via WhatsApp</a>
          </Button>
        </form>
      </section>

      <section className="py-10 px-6 text-center bg-green-50">
        <h3 className="text-2xl font-bold mb-6">Licenças e Certificações</h3>
        <p className="max-w-2xl mx-auto">Empresa registrada sob CNPJ 57.322.762/0001-21. Atendemos com produtos regulamentados e equipe técnica qualificada.</p>
      </section>

      <section className="py-10 px-6 text-center">
        <h3 className="text-2xl font-bold mb-6">Localização</h3>
        <iframe className="w-full h-64 rounded-2xl border" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.1977635147476!2d-42.02809538447986!3d-22.903735685016104!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x98b65ff0f4ad67%3A0x18b28a6e2435e1c!2sBarra%20de%20S%C3%A3o%20Jo%C3%A3o%2C%20Casimiro%20de%20Abreu%20-%20RJ!5e0!3m2!1spt-BR!2sbr!4v1683748587201" allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>

      <footer className="bg-green-700 text-white p-6 mt-10 text-center">
        <p className="mb-2">&copy; 2025 Dedetizadora Insect Control - Todos os direitos reservados</p>
        <div className="flex justify-center gap-4">
          <a href="tel:+5522999555454" className="flex items-center gap-1 hover:underline"><Phone className="w-4 h-4" /> (22) 99955-5454</a>
          <a href="https://www.instagram.com/dedetizadorainsectcontrol" className="hover:underline">Instagram</a>
        </div>
      </footer>
    </main>
  );
}
