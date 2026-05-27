export default function DDWLanding() {
  const telegramLink = 'https://t.me/dogn09'
  const whatsappLink = 'https://wa.me/79299382231'
  const email = 'rryaf.co@gmail.com'

  const gallery = [
    'IMG_1706.jpeg',
    'IMG_1710.jpeg',
    'IMG_1713.jpeg',
    'IMG_1709.jpeg',
    'IMG_1724.jpeg',
    'IMG_1729.jpeg',
    'IMG_1726.jpeg',
    'IMG_1727.jpeg',
    'IMG_1718.jpeg',
    'IMG_1723.jpeg',
    'IMG_1722.jpeg',
    'IMG_1721.jpeg',
    'IMG_1719.jpeg',
    'IMG_1768.png',
    'IMG_1769.png',
    'IMG_1732.jpeg',
    'IMG_1735.jpeg',
    'IMG_1733.jpeg',
    'IMG_1731.jpeg',
    'IMG_1744.jpeg',
    'IMG_1743.jpeg',
    'IMG_1730.jpeg',
    'IMG_1756.jpeg',
    'IMG_1748.jpeg',
    'IMG_1751.jpeg',
  ]

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen font-sans overflow-x-hidden">
      {/* HERO */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src="/mnt/data/IMG_1705.jpeg"
            alt="DDW 36/13"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center w-full">
          <div className="animate-in fade-in slide-in-from-left duration-700">
            <div className="inline-flex items-center bg-[#b51217] px-5 py-2 rounded-full text-sm font-bold tracking-wide mb-6 shadow-2xl">
              ГОТОВА К РАБОТЕ
            </div>

            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] mb-6">
              DDW 36/13
            </h1>

            <div className="text-2xl md:text-3xl text-zinc-300 font-semibold mb-8">
              2020 год • 2646 м/ч • Полный комплект
            </div>

            <p className="text-zinc-400 text-lg md:text-xl max-w-2xl leading-relaxed mb-10">
              Обслуженная установка ГНБ с комплектом под работу. Видеообзор, запуск, фото узлов и дополнительные материалы отправлю по запросу.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={telegramLink}
                target="_blank"
                className="bg-[#b51217] hover:bg-[#d0181e] transition-all duration-300 px-8 py-5 rounded-2xl text-lg font-bold shadow-[0_0_40px_rgba(181,18,23,0.35)] text-center"
              >
                Написать в Telegram
              </a>

              <a
                href={whatsappLink}
                target="_blank"
                className="border border-[#353535] hover:border-[#5a5a5a] transition-all duration-300 px-8 py-5 rounded-2xl text-lg font-semibold text-center backdrop-blur-xl"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-right duration-700">
            <div className="bg-[#111111]/85 backdrop-blur-2xl border border-[#242424] rounded-[32px] p-8 shadow-[0_0_60px_rgba(0,0,0,0.45)]">
              <div className="text-zinc-500 uppercase tracking-[0.25em] text-sm mb-4">
                Цена
              </div>

              <div className="text-5xl md:text-6xl font-black mb-8">
                5 150 000 ₽
              </div>

              <div className="space-y-5 text-lg text-zinc-300">
                <div>✅ 50 штанг</div>
                <div>✅ Расширители 300 / 500 / 900</div>
                <div>✅ Новый смесительный узел</div>
                <div>✅ Видео запуска и работы</div>
                <div>✅ Возможен лизинг</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO */}
      <section className="py-24 border-y border-[#1f1f1f] bg-[#0d0d0d]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mb-12">
            <div className="text-[#d0181e] uppercase tracking-[0.3em] text-sm mb-4">
              Видеообзор
            </div>

            <h2 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
              Полный обзор установки
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Видео с запуском, обзором узлов, гидравлики, комплектацией и состоянием техники.
            </p>
          </div>

          <div className="rounded-[32px] overflow-hidden border border-[#262626] shadow-[0_0_80px_rgba(0,0,0,0.5)] bg-black aspect-video">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source src="/mnt/data/62c1d0a123dc4caf85f351e3637155e1.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-14">
          <div>
            <div className="text-[#d0181e] uppercase tracking-[0.3em] text-sm mb-4">
              Фотографии
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight">
              Состояние и комплект
            </h2>
          </div>

          <div className="text-zinc-500 max-w-xl text-lg leading-relaxed">
            Реальные фотографии установки, узлов, гидравлики, комплекта и текущего состояния техники.
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {gallery.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[28px] border border-[#262626] bg-[#111111] group hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(181,18,23,0.18)] transition-all duration-500"
            >
              <img
                src={`/mnt/data/${img}`}
                alt={img}
                className="w-full h-[320px] object-cover group-hover:scale-105 transition duration-700"
              />
            </div>
          ))}
        </div>
      </section>

      {/* SERVICE */}
      <section className="bg-[#0d0d0d] border-y border-[#1f1f1f] py-24">
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <div className="bg-[#111111] border border-[#242424] rounded-[32px] p-10">
            <div className="text-[#d0181e] uppercase tracking-[0.3em] text-sm mb-4">
              Состояние
            </div>

            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Что сделано по технике
            </h2>

            <div className="space-y-5 text-zinc-300 text-lg">
              <div>• Проведено ТО</div>
              <div>• Замена масел и фильтров</div>
              <div>• Обслужена гидравлика</div>
              <div>• Замена водяного вертлюга</div>
              <div>• Техника готова к работе</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#141414] to-[#1b1b1b] border border-[#2b2b2b] rounded-[32px] p-10 shadow-[0_0_60px_rgba(181,18,23,0.12)]">
            <div className="text-3xl font-black mb-6">
              Важно
            </div>

            <p className="text-zinc-400 text-lg leading-relaxed mb-6">
              По косметике есть обычные следы эксплуатации. Установка рабочая и открыта для проверки на месте.
            </p>

            <p className="text-zinc-400 text-lg leading-relaxed">
              Продажа в связи с обновлением техники / сменой направления.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="py-24 bg-[#080808]">
        <div className="max-w-5xl mx-auto px-6">
          <div className="bg-gradient-to-br from-[#111111] to-[#191919] border border-[#2a2a2a] rounded-[40px] p-8 md:p-14 shadow-[0_0_100px_rgba(181,18,23,0.15)]">
            <div className="text-[#d0181e] uppercase tracking-[0.3em] text-sm mb-4">
              Связаться
            </div>

            <h2 className="text-4xl md:text-6xl font-black leading-tight mb-6">
              Получить полный пакет материалов
            </h2>

            <p className="text-zinc-400 text-lg leading-relaxed mb-10 max-w-3xl">
              Отправлю дополнительные фото, видео запуска, обзор узлов и оперативно отвечу на вопросы.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <input
                placeholder="Ваше имя"
                className="bg-black border border-[#2a2a2a] rounded-2xl px-6 py-5 text-lg outline-none focus:border-[#b51217] transition"
              />

              <input
                placeholder="Телефон / Telegram"
                className="bg-black border border-[#2a2a2a] rounded-2xl px-6 py-5 text-lg outline-none focus:border-[#b51217] transition"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Комментарий"
              className="w-full bg-black border border-[#2a2a2a] rounded-2xl px-6 py-5 text-lg outline-none focus:border-[#b51217] transition mb-8"
            />

            <div className="flex flex-col lg:flex-row gap-5 items-start lg:items-center justify-between">
              <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                <a
                  href={telegramLink}
                  target="_blank"
                  className="bg-[#b51217] hover:bg-[#d0181e] transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_0_40px_rgba(181,18,23,0.35)] text-center"
                >
                  Telegram
                </a>

                <a
                  href={whatsappLink}
                  target="_blank"
                  className="border border-[#353535] hover:border-[#5a5a5a] transition-all duration-300 px-10 py-5 rounded-2xl text-xl font-semibold text-center"
                >
                  WhatsApp
                </a>
              </div>

              <div className="text-zinc-500 text-sm leading-relaxed">
                Дмитрий • +7 929 938-22-31<br />
                {email}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MOBILE CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-black/95 backdrop-blur-xl border-t border-[#2a2a2a] p-3">
        <div className="grid grid-cols-2 gap-3">
          <a
            href={telegramLink}
            target="_blank"
            className="bg-[#b51217] text-white rounded-2xl py-4 text-center font-bold shadow-2xl"
          >
            Telegram
          </a>

          <a
            href={whatsappLink}
            target="_blank"
            className="border border-[#3a3a3a] rounded-2xl py-4 text-center font-semibold"
          >
            WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
