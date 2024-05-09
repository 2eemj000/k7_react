export default function BoxOfficeThead() {
  return (
    <thead
    className="border-b border-neutral-400 font-medium">
    <tr className="bg-blue-600 text-white font-bold">
      {/* py값 조정하면 세로 간격 조절가능 */}
      <th scope="col" className="px-6 py-3">순위</th>
      <th scope="col" className="px-6 py-3">영화명</th>
      <th scope="col" className="px-6 py-3">누적매출액</th>
      <th scope="col" className="px-6 py-3">누적관객수</th>
      <th scope="col" className="px-6 py-3">증감률</th>
    </tr>
  </thead>
  )
}
