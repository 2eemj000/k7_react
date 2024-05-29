# Tailwind Table 참조
- https://tw-elements.com/docs/standard/data/tables/
# Vercel
- https://k7-react-fawn.vercel.app/

# React 기본설정 정리
React Project 생성
- Node.js 설치 : https://nodejs.org/
- npx create-react-app my-app
tailwind css 설치
- npm install -D tailwindcss
- Tailwind CSS 설정 파일 생성 : npx tailwindcss init
- tailwind.config.js 파일 수정
  /** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
