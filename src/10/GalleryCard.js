// 공공데이터포털 신청 -> 미리보기 -> 인코딩사이트 찾아서 '태종대' 넣고 인코딩한거랑 인증키 넣고 미리보기 -> 그중에서 한세트만 {} 데려와서 그중에 imgUrl 들고옴
// 전체틀은 tailwind card component 찾아서 className만 바꾼 것

import { useState } from "react";

// {imgUrl,title,content,spTag}은 Gallery에서 받아오도록 수정함
export default function GalleryCard({imgUrl,title,content,spTag}) {
  const spTags = (spTag.includes(',')?spTag.split(','):[spTag]) // 배열
                .map(item=>
                    <span className="inline-block bg-gray-200 rounded-full m-1 p-1 font-normal text-gray-600" key={item}>
                        {item}
                    </span>
                );// 그 배열에 .map을 바로 걸었음
  console.log('spTags',spTags)
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow">
    <a href="#">
        {/* img주소 때문에 오류나는 경우 -> http대신 https로 바꿔줌 */}
        <img className="rounded-t-lg" src={imgUrl.includes('http;') ?imgUrl.replace('http:','https:'):imgUrl} alt={title}/> 
    </a>
    <div className="p-5">
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">{title}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700">{content}</p>
        <div>{spTags}</div>
    </div>
</div>
  )
}
