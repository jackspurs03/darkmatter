<script setup lang="ts">
import teamData from '~/data/team.json'
import servicesData from '~/data/services.json'

useHead({
  title: 'DARK MATTER | Барбершоп',
  htmlAttrs: {
    lang: 'ru',
    class: 'dark'
  },
  bodyAttrs: {
    class: 'bg-background text-on-surface font-body selection:bg-primary/30 selection:text-primary-fixed break-words'
  },
  link: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Noto+Serif:wght@400;700;800&family=Manrope:wght@300;400;500;600;700&display=swap' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap' }
  ]
})
</script>

<template>
  <div>
    <!-- Navigation -->
    <nav class="fixed top-0 w-full z-50 bg-background border-b border-white/5 flex justify-center">
      <div class="flex justify-between items-center w-full max-w-7xl mx-auto px-4 md:px-8 py-3 md:py-5 gap-2">
        
        <div class="flex-none lg:flex-1 flex justify-start">
          <a class="font-headline font-bold tracking-[0.05em] sm:tracking-[0.1em] md:tracking-[0.15em] text-white whitespace-nowrap text-base sm:text-lg md:text-2xl font-extrabold logo-accent" href="#">
            ТЕМНАЯ МАТЕРИЯ
          </a>
        </div>
        
        <div class="hidden lg:flex flex-1 justify-center items-center space-x-6 xl:space-x-12">
          <a class="font-label uppercase tracking-widest text-[10px] text-on-surface-variant border-b-2 border-transparent pb-1 transition-all duration-300 hover:text-white hover:border-primary" href="#advantages">Преимущества</a>
          <a class="font-label uppercase tracking-widest text-[10px] text-on-surface-variant border-b-2 border-transparent pb-1 transition-all duration-300 hover:text-white hover:border-primary" href="#price">Прайс</a>
          <a class="font-label uppercase tracking-widest text-[10px] text-on-surface-variant border-b-2 border-transparent pb-1 transition-all duration-300 hover:text-white hover:border-primary" href="#team">Команда</a>
          <a class="font-label uppercase tracking-widest text-[10px] text-on-surface-variant border-b-2 border-transparent pb-1 transition-all duration-300 hover:text-white hover:border-primary" href="#contacts">Контакты</a>
        </div>
        
        <div class="flex-none lg:flex-1 flex items-center justify-end gap-3 md:gap-6">
          <a class="hidden sm:block text-primary font-body text-sm md:text-base hover:text-primary/80 transition-colors whitespace-nowrap" href="tel:+79494673818">
            <span class="hidden md:inline">+7 (949) 467-38-18</span>
            <span class="md:hidden material-symbols-outlined align-middle text-lg">call</span>
          </a>
          <a href="https://n1133019.yclients.com/select-city?o=" class="bg-primary text-primary-container px-4 md:px-6 py-2 md:py-2.5 font-label uppercase tracking-wider text-[9px] md:text-[10px] font-bold transition-all duration-200 hover:brightness-110 active:scale-95 whitespace-nowrap inline-flex items-center justify-center">
            Записаться
          </a>
        </div>

      </div>
    </nav>

    <main>
      <!-- Hero Section -->
      <section class="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-black/70 z-10 backdrop-blur-[2px]"></div>
          <img alt="Atmospheric Dark Matter Background" class="w-full h-full object-cover scale-105" src="/hero-background.png"/>
        </div>
        
        <div class="relative z-20 px-8 md:px-16 w-full max-w-7xl mx-auto text-center flex flex-col items-center">
          <span class="font-label uppercase tracking-[0.5em] text-primary text-[10px] mb-8 block">
            The Celestial Groomer
          </span>
          <h1 class="font-headline text-6xl md:text-[140px] font-bold tracking-tight mb-12 leading-[0.9] text-white uppercase">
            ТЕМНАЯ МАТЕРИЯ
          </h1>
          <p class="max-w-3xl text-on-surface-variant text-base md:text-lg font-light leading-relaxed mb-12">
            «Тёмная материя» — барбершоп №1 в Донецке, где начинается не стрижка, а перезагрузка твоего стиля. 
            Мы не просто меняем форму волос, мы проявляем твой скрытый характер, твою силу и уверенность — 
            ту самую «тёмную материю» твоей личности.
          </p>
          <div class="flex flex-col sm:flex-row gap-4">
            <a href="https://n1133019.yclients.com/select-city?o=" class="btn-solid px-10 py-4 font-label uppercase tracking-widest text-xs font-bold transition-all inline-flex items-center justify-center">
              Записаться
            </a>
            <a href="tel:+79494673818" class="btn-outline text-white px-10 py-4 font-label uppercase tracking-widest text-xs font-bold transition-all inline-flex items-center justify-center">
              Позвонить
            </a>
          </div>
        </div>
        
        <div class="absolute bottom-12 w-full flex justify-center">
          <div class="animate-bounce">
            <span class="material-symbols-outlined text-primary/50">expand_more</span>
          </div>
        </div>
      </section>

      <!-- Advantages Section -->
      <section class="bg-background py-32 md:py-48 overflow-hidden" id="advantages">
        <div class="max-w-7xl mx-auto px-8 md:px-16">
          <div class="mb-16">
            <h2 class="font-headline text-4xl md:text-6xl font-bold text-white uppercase">
              Наши преимущества
            </h2>
          </div>
          
          <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div class="md:col-span-2 relative group bg-surface-container-low border border-outline-variant/10 p-10 md:p-16 transition-all duration-300 hover:border-primary/20">
              <div class="absolute top-12 right-12 font-headline text-[80px] md:text-[140px] font-extrabold text-white/[0.03] select-none leading-none pointer-events-none transition-all duration-700 group-hover:text-primary/[0.05]">
                01
              </div>
              <div class="relative z-10 w-full">
                <div class="w-12 h-px bg-primary/40 mb-8"></div>
                <h3 class="font-headline text-2xl md:text-3xl text-white mb-6 uppercase tracking-tight">Высококвалифицированные мастера</h3>
                <p class="text-on-surface-variant text-base md:text-lg leading-relaxed font-light tracking-wide max-w-4xl">
                  Каждый день мы усердно работаем, чтобы пробудить в каждом «Тёмную материю». За нашим статусом 
                  стоит не просто философия, а безупречное мастерство. Каждый барбер в «Тёмной Материи» — это 
                  опытный специалист, который регулярно повышает квалификацию.
                </p>
              </div>
            </div>
            
            <div class="relative group bg-surface-container-low border border-outline-variant/10 p-10 md:p-12 transition-all duration-300 hover:border-primary/20">
              <div class="absolute top-8 right-8 font-headline text-[60px] md:text-[100px] font-extrabold text-white/[0.03] select-none leading-none pointer-events-none transition-all duration-700 group-hover:text-primary/[0.05]">
                02
              </div>
              <div class="relative z-10 w-full">
                <div class="w-12 h-px bg-primary/40 mb-8"></div>
                <h3 class="font-headline text-2xl md:text-3xl text-white mb-6 uppercase tracking-tight">Зона ожидания</h3>
                <p class="text-on-surface-variant text-base leading-relaxed font-light tracking-wide">
                  Пока вы ждете своего мастера, расположитесь на уютном диване, выпейте чашечку свежесваренного 
                  кофе и бросьте вызов другу в гонках на нашей приставке. Мы создали пространство, где время замирает.
                </p>
              </div>
            </div>
            
            <div class="relative group bg-surface-container-low border border-outline-variant/10 p-10 md:p-12 transition-all duration-300 hover:border-primary/20">
              <div class="absolute top-8 right-8 font-headline text-[60px] md:text-[100px] font-extrabold text-white/[0.03] select-none leading-none pointer-events-none transition-all duration-700 group-hover:text-primary/[0.05]">
                03
              </div>
              <div class="relative z-10 w-full">
                <div class="w-12 h-px bg-primary/40 mb-8"></div>
                <h3 class="font-headline text-2xl md:text-3xl text-white mb-6 uppercase tracking-tight">Профессиональная косметика</h3>
                <p class="text-on-surface-variant text-base leading-relaxed font-light tracking-wide">
                  Воски, помады, муссы и масла — мы используем только премиальные линейки. Мы подберем средство, 
                  которое идеально подойдет для типа ваших волос и желаемого эффекта, сохраняя здоровье и блеск.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Price Section -->
      <section class="bg-surface-container-low px-8 md:px-16 py-16" id="price">
        <div class="max-w-7xl mx-auto">
          <div class="flex flex-col md:flex-row justify-between items-end gap-8 mb-12">
            <div class="max-w-2xl">
              <h2 class="font-headline text-4xl md:text-6xl font-bold mb-6 text-white uppercase">Прайс</h2>
              <p class="text-on-surface-variant text-lg">
                Инвестиция в ваш имидж. Выберите категорию мастера, соответствующую вашим ожиданиям и стилю.
              </p>
            </div>
          </div>
          
          <!-- Desktop Table View -->
          <div class="hidden lg:block overflow-x-auto no-scrollbar">
            <table class="w-full text-left border-collapse">
              <thead>
                <tr class="border-b border-outline-variant/30">
                  <th class="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold py-3">Услуга</th>
                  <th class="px-6 font-label uppercase tracking-[0.3em] text-[10px] text-on-surface-variant font-bold py-3">Барбер</th>
                  <th class="px-6 font-label uppercase tracking-[0.3em] text-[10px] text-on-surface-variant font-bold py-3">Старший</th>
                  <th class="px-6 font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold py-3">Эксперт</th>
                </tr>
              </thead>
              <tbody class="divide-outline-variant/10">
                <tr 
                  v-for="(service, index) in servicesData" 
                  :key="index"
                  class="table-row-hover transition-colors border-b border-outline-variant/10"
                >
                  <td class="pr-6 py-3">
                    <div class="font-headline text-lg md:text-xl text-white">{{ service.title }}</div>
                    <span class="text-[9px] font-label uppercase tracking-widest text-on-surface-variant/50">
                      {{ service.subtitle }}
                    </span>
                  </td>
                  <td class="px-6 font-headline text-base text-on-surface py-3">{{ service.priceBarber }}</td>
                  <td class="px-6 font-headline text-base text-on-surface py-3">{{ service.priceSenior }}</td>
                  <td class="px-6 font-headline text-base text-primary py-3">{{ service.priceExpert }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- Mobile Cards View -->
          <div class="grid grid-cols-1 gap-4 lg:hidden">
            <div 
              v-for="(service, index) in servicesData" 
              :key="`mobile-${index}`"
              class="bg-surface-container-low border border-outline-variant/20 p-5 flex flex-col gap-4 relative overflow-hidden"
            >
              <div class="absolute -right-4 -top-4 w-16 h-16 bg-primary/5 rounded-full blur-xl"></div>
              
              <div>
                <div class="font-headline text-lg text-white mb-1">{{ service.title }}</div>
                <div class="text-[10px] font-label uppercase tracking-widest text-on-surface-variant/50">
                  {{ service.subtitle }}
                </div>
              </div>
              
              <div class="grid grid-cols-3 gap-2 mt-1">
                <div class="flex flex-col items-center justify-center py-2 px-1 rounded border border-outline-variant/10 bg-background/50 text-center">
                  <span class="font-label uppercase tracking-[0.2em] text-[8px] text-on-surface-variant font-bold mb-1">Барбер</span>
                  <span class="font-headline text-sm text-on-surface">{{ service.priceBarber }}</span>
                </div>
                <div class="flex flex-col items-center justify-center py-2 px-1 rounded border border-outline-variant/10 bg-background/50 text-center">
                  <span class="font-label uppercase tracking-[0.2em] text-[8px] text-on-surface-variant font-bold mb-1">Старший</span>
                  <span class="font-headline text-sm text-on-surface">{{ service.priceSenior }}</span>
                </div>
                <div class="flex flex-col items-center justify-center py-2 px-1 rounded border border-primary/20 bg-primary/5 relative overflow-hidden text-center">
                  <span class="font-label uppercase tracking-[0.2em] text-[8px] text-primary font-bold mb-1">Эксперт</span>
                  <span class="font-headline text-sm text-primary font-bold">{{ service.priceExpert }}</span>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-8 p-6 bg-surface-container border border-outline-variant/20">
            <div class="flex items-start gap-4">
              <span class="material-symbols-outlined text-primary">info</span>
              <div>
                <span class="text-primary font-bold uppercase tracking-widest text-[10px] block mb-1">
                  Дополнительная информация
                </span>
                <p class="text-on-surface-variant text-sm md:text-base leading-relaxed">
                  В барбершопе также предоставляются услуги <span class="text-white font-medium">пирсинга</span> 
                  и продажа украшений из титана по цене от 900 рублей.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Team Section -->
      <section class="bg-background py-32 px-8 md:px-16" id="team">
        <div class="max-w-7xl mx-auto">
          <h2 class="font-headline text-4xl md:text-6xl font-bold mb-16 text-white uppercase">Наша команда</h2>
          
          <div class="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-16">
            <div 
              v-for="(member, index) in teamData" 
              :key="index" 
              class="flex flex-col items-center text-center group"
            >
              <div class="w-32 h-32 md:w-48 md:h-48 rounded-full overflow-hidden mb-6 border-2 border-outline-variant/20 group-hover:border-primary/50 transition-all duration-300">
                <img 
                  :alt="member.name" 
                  class="w-full h-full object-cover" 
                  :src="member.image"
                />
              </div>
              <h3 class="font-headline text-xl text-white font-bold mb-1 uppercase tracking-tight">
                {{ member.name }}
              </h3>
              <span class="text-on-surface-variant text-xs md:text-sm font-label uppercase tracking-widest">
                {{ member.role }}
              </span>
            </div>
          </div>
        </div>
      </section>

      <!-- Contacts Section -->
      <section class="bg-surface-container-low py-32 px-8 md:px-16" id="contacts">
        <div class="max-w-7xl mx-auto">
          <h2 class="font-headline text-4xl md:text-6xl font-bold mb-16 text-white uppercase">Контакты</h2>
          
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div class="lg:col-span-5 space-y-10">
              <div>
                <span class="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold block mb-8">
                  Наши Адреса
                </span>
                <ul class="space-y-6">
                  <li class="flex items-center gap-4 group">
                    <span class="material-symbols-outlined text-primary text-xl">location_on</span>
                    <span class="text-on-surface text-base font-light">г. Донецк, ул. Челюскинцев, 184б</span>
                  </li>
                  <li class="flex items-center gap-4 group">
                    <span class="material-symbols-outlined text-primary text-xl">location_on</span>
                    <span class="text-on-surface text-base font-light">г. Макеевка, ул. Ленина, 46/28</span>
                  </li>
                  <li class="flex items-center gap-4 group">
                    <span class="material-symbols-outlined text-primary text-xl">location_on</span>
                    <span class="text-on-surface text-base font-light">г. Мариуполь, ул. Нильсена, 39</span>
                  </li>
                </ul>
              </div>
              
              <div class="space-y-10">
                <div>
                  <span class="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold block mb-3">
                    Время работы
                  </span>
                  <p class="text-on-surface text-base font-light">Ежедневно: 10:00 – 19:00</p>
                </div>
                <div>
                  <span class="font-label uppercase tracking-[0.3em] text-[10px] text-primary font-bold block mb-3">
                    Телефон
                  </span>
                  <a class="text-white text-xl font-headline font-bold hover:text-primary transition-colors" href="tel:+79494673818">
                    +7 (949) 467-38-18
                  </a>
                </div>
              </div>
            </div>
            
            <div class="lg:col-span-7">
              <div class="relative h-[350px] md:h-[450px] border border-outline-variant/20 overflow-hidden">
                <iframe 
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3A2315739eb754d7ac36f9e0ff66a1b567642447c16ce78fa82f850378b75af16c&amp;source=constructor" 
                  width="100%" 
                  height="400" 
                  frameborder="0">
                </iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>

    <!-- Footer -->
    <footer class="w-full border-t border-white/5" id="footer" style="background-color: #000000;">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-12 py-16 w-full gap-12">
        <div>
          <a class="font-headline text-xl text-white mb-6 block font-bold tracking-tight uppercase" href="#">
            ТЕМНАЯ МАТЕРИЯ
          </a>
          <p class="font-body text-[10px] tracking-wide text-on-surface-variant/50 uppercase">
            © 2026 DARK MATTER BARBERSHOP.
          </p>
        </div>
        
        <div class="flex flex-col md:flex-row gap-8 md:gap-16">
          <div class="flex flex-col gap-4">
            <span class="font-label text-[10px] text-primary uppercase tracking-widest font-bold">Социальные сети</span>
            <div class="flex gap-6">
              <a class="text-on-surface-variant hover:text-primary transition-colors font-body text-xs" href="#">Instagram</a>
              <a class="text-on-surface-variant hover:text-primary transition-colors font-body text-xs" href="#">Telegram</a>
              <a class="text-on-surface-variant hover:text-primary transition-colors font-body text-xs" href="#">VK</a>
            </div>
          </div>
          
          <div class="flex flex-col gap-4">
            <span class="font-label text-[10px] text-primary uppercase tracking-widest font-bold">Информация</span>
            <a class="text-on-surface-variant hover:text-primary transition-colors font-body text-xs" href="#">Политика конфиденциальности</a>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>
