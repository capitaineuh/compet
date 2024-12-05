export function Card({ title, description, buttonText, buttonColor = 'bg-[#B4EDE8]' }) {
    return `
      <div class="p-8 rounded-lg h-full flex flex-col justify-between ${buttonColor === 'bg-[#B4EDE8]' ? 'bg-[#B4EDE8]' : buttonColor === 'bg-[#FFB4B4]' ? 'bg-[#FFB4B4]' : 'bg-[#FFF9D4]'}">
        <div>
          <h3 class="text-xl font-bold mb-4">${title}</h3>
          <p class="text-gray-700 mb-6">${description}</p>
        </div>
        <button class="w-full ${buttonColor} text-black px-6 py-3 rounded-full hover:opacity-90 transition">
          ${buttonText}
        </button>
      </div>
    `
  }